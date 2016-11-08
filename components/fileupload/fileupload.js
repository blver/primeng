import { NgModule, Component, Input, Output, EventEmitter, ContentChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { ButtonModule } from '../button/button';
import { MessagesModule } from '../messages/messages';
import { ProgressBarModule } from '../progressbar/progressbar';
import { PrimeTemplate, SharedModule } from '../common/shared';
export var FileUpload = (function () {
    function FileUpload(sanitizer) {
        this.sanitizer = sanitizer;
        this.invalidFileSizeMessageSummary = '{0}: Invalid file size, ';
        this.invalidFileSizeMessageDetail = 'maximum upload size is {0}.';
        this.previewWidth = 50;
        this.onBeforeUpload = new EventEmitter();
        this.onUpload = new EventEmitter();
        this.onError = new EventEmitter();
        this.onClear = new EventEmitter();
        this.onSelect = new EventEmitter();
        this.progress = 0;
    }
    FileUpload.prototype.ngOnInit = function () {
        this.files = [];
    };
    FileUpload.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.templates.forEach(function (item) {
            switch (item.type) {
                case 'file':
                    _this.fileTemplate = item.template;
                    break;
                case 'content':
                    _this.contentTemplate = item.template;
                    break;
                default:
                    _this.fileTemplate = item.template;
                    break;
            }
        });
    };
    FileUpload.prototype.onChooseClick = function (event, fileInput) {
        fileInput.value = null;
        fileInput.click();
    };
    FileUpload.prototype.onFileSelect = function (event) {
        this.msgs = [];
        var files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            if (this.validate(file)) {
                if (this.isImage(file)) {
                    file.objectURL = this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(files[i])));
                }
                this.files.push(files[i]);
            }
        }
        this.onSelect.emit({ originalEvent: event, files: files });
        if (this.files && this.auto) {
            this.upload();
        }
    };
    FileUpload.prototype.validate = function (file) {
        if (this.maxFileSize && file.size > this.maxFileSize) {
            this.msgs.push({
                severity: 'error',
                summary: this.invalidFileSizeMessageSummary.replace('{0}', file.name),
                detail: this.invalidFileSizeMessageDetail.replace('{0}', this.formatSize(this.maxFileSize))
            });
            return false;
        }
        return true;
    };
    FileUpload.prototype.isImage = function (file) {
        return /^image\//.test(file.type);
    };
    FileUpload.prototype.onImageLoad = function (img) {
        window.URL.revokeObjectURL(img.src);
    };
    FileUpload.prototype.upload = function () {
        var _this = this;
        this.msgs = [];
        var xhr = new XMLHttpRequest(), formData = new FormData();
        for (var i = 0; i < this.files.length; i++) {
            formData.append(this.name, this.files[i], this.files[i].name);
        }
        xhr.upload.addEventListener('progress', function (e) {
            if (e.lengthComputable) {
                _this.progress = Math.round((e.loaded * 100) / e.total);
            }
        }, false);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                _this.progress = 0;
                if (xhr.status == 200)
                    _this.onUpload.emit({ xhr: xhr, files: _this.files });
                else
                    _this.onError.emit({ xhr: xhr, files: _this.files });
                _this.clear();
            }
        };
        xhr.open('POST', this.url, true);
        this.onBeforeUpload.emit({
            'xhr': xhr,
            'formData': formData
        });
        xhr.send(formData);
    };
    FileUpload.prototype.clear = function () {
        this.files = [];
        this.onClear.emit();
    };
    FileUpload.prototype.remove = function (index) {
        this.files.splice(index, 1);
    };
    FileUpload.prototype.hasFiles = function () {
        return this.files && this.files.length > 0;
    };
    FileUpload.prototype.onDragEnter = function (e) {
        if (!this.disabled) {
            e.stopPropagation();
            e.preventDefault();
        }
    };
    FileUpload.prototype.onDragOver = function (e) {
        if (!this.disabled) {
            this.dragHighlight = true;
            e.stopPropagation();
            e.preventDefault();
        }
    };
    FileUpload.prototype.onDragLeave = function (e) {
        if (!this.disabled) {
            this.dragHighlight = false;
        }
    };
    FileUpload.prototype.onDrop = function (e) {
        if (!this.disabled) {
            this.dragHighlight = false;
            e.stopPropagation();
            e.preventDefault();
            this.onFileSelect(e);
        }
    };
    FileUpload.prototype.formatSize = function (bytes) {
        if (bytes == 0) {
            return '0 B';
        }
        var k = 1000, dm = 3, sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'], i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    };
    FileUpload.decorators = [
        { type: Component, args: [{
                    selector: 'p-fileUpload',
                    template: "\n        <div [ngClass]=\"'ui-fileupload ui-widget'\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <div class=\"ui-fileupload-buttonbar ui-widget-header ui-corner-top\">\n                <button type=\"button\" label=\"Choose\" icon=\"fa-plus\" pButton class=\"ui-fileupload-choose\" (click)=\"onChooseClick($event, fileinput)\" [disabled]=\"disabled\"> \n                    <input #fileinput type=\"file\" (change)=\"onFileSelect($event)\" [multiple]=\"multiple\" [accept]=\"accept\" [disabled]=\"disabled\">\n                </button>\n\n                <button type=\"button\" label=\"Upload\" icon=\"fa-upload\" pButton (click)=\"upload()\" [disabled]=\"!hasFiles()\"></button>\n                <button type=\"button\" label=\"Cancel\" icon=\"fa-close\" pButton (click)=\"clear()\" [disabled]=\"!hasFiles()\"></button>\n            </div>\n            <div [ngClass]=\"{'ui-fileupload-content ui-widget-content ui-corner-bottom':true,'ui-fileupload-highlight':dragHighlight}\" \n                (dragenter)=\"onDragEnter($event)\" (dragover)=\"onDragOver($event)\" (dragleave)=\"onDragLeave($event)\" (drop)=\"onDrop($event)\">\n                <p-progressBar [value]=\"progress\" [showValue]=\"false\" *ngIf=\"hasFiles()\"></p-progressBar>\n                \n                <p-messages [value]=\"msgs\"></p-messages>\n                \n                <div class=\"ui-fileupload-files\" *ngIf=\"hasFiles()\">\n                    <div *ngIf=\"!fileTemplate\">\n                        <div class=\"ui-fileupload-row\" *ngFor=\"let file of files\">\n                            <div><img [src]=\"file.objectURL\" *ngIf=\"isImage(file)\" [width]=\"previewWidth\" /></div>\n                            <div>{{file.name}}</div>\n                            <div>{{formatSize(file.size)}}</div>\n                            <div><button type=\"button\" icon=\"fa-close\" pButton (click)=\"remove(i)\"></button></div>\n                        </div>\n                    </div>\n                    <div *ngIf=\"fileTemplate\">\n                        <template ngFor [ngForOf]=\"files\" [ngForTemplate]=\"fileTemplate\"></template>\n                    </div>\n                </div>\n                \n                <p-templateLoader [template]=\"contentTemplate\"></p-templateLoader>\n            </div>\n        </div>\n    "
                },] },
    ];
    /** @nocollapse */
    FileUpload.ctorParameters = [
        { type: DomSanitizer, },
    ];
    FileUpload.propDecorators = {
        'name': [{ type: Input },],
        'url': [{ type: Input },],
        'multiple': [{ type: Input },],
        'accept': [{ type: Input },],
        'disabled': [{ type: Input },],
        'auto': [{ type: Input },],
        'maxFileSize': [{ type: Input },],
        'invalidFileSizeMessageSummary': [{ type: Input },],
        'invalidFileSizeMessageDetail': [{ type: Input },],
        'style': [{ type: Input },],
        'styleClass': [{ type: Input },],
        'previewWidth': [{ type: Input },],
        'onBeforeUpload': [{ type: Output },],
        'onUpload': [{ type: Output },],
        'onError': [{ type: Output },],
        'onClear': [{ type: Output },],
        'onSelect': [{ type: Output },],
        'templates': [{ type: ContentChildren, args: [PrimeTemplate,] },],
    };
    return FileUpload;
}());
export var FileUploadModule = (function () {
    function FileUploadModule() {
    }
    FileUploadModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, SharedModule, ButtonModule, ProgressBarModule, MessagesModule],
                    exports: [FileUpload, SharedModule, ButtonModule, ProgressBarModule, MessagesModule],
                    declarations: [FileUpload]
                },] },
    ];
    /** @nocollapse */
    FileUploadModule.ctorParameters = [];
    return FileUploadModule;
}());
//# sourceMappingURL=fileupload.js.map