import { NgModule, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
export var Messages = (function () {
    function Messages() {
        this.closable = true;
    }
    Messages.prototype.hasMessages = function () {
        return this.value && this.value.length > 0;
    };
    Messages.prototype.getSeverityClass = function () {
        return this.value[0].severity;
    };
    Messages.prototype.clear = function (event) {
        this.value.splice(0, this.value.length);
        event.preventDefault();
    };
    Object.defineProperty(Messages.prototype, "icon", {
        get: function () {
            var icon = null;
            if (this.hasMessages()) {
                var msg = this.value[0];
                switch (msg.severity) {
                    case 'success':
                        icon = 'fa-check';
                        break;
                    case 'info':
                        icon = 'fa-info-circle';
                        break;
                    case 'error':
                        icon = 'fa-close';
                        break;
                    case 'warn':
                        icon = 'fa-warning';
                        break;
                    case 'success':
                        icon = 'fa-check';
                        break;
                    default:
                        icon = 'fa-info-circle';
                        break;
                }
            }
            return icon;
        },
        enumerable: true,
        configurable: true
    });
    Messages.decorators = [
        { type: Component, args: [{
                    selector: 'p-messages',
                    template: "\n        <div *ngIf=\"hasMessages()\" class=\"ui-messages ui-widget ui-corner-all\" style=\"display:block\"\n                    [ngClass]=\"{'ui-messages-info':(value[0].severity === 'info'),\n                    'ui-messages-warn':(value[0].severity === 'warn'),\n                    'ui-messages-error':(value[0].severity === 'error'),\n                    'ui-messages-success':(value[0].severity === 'success')}\">\n            <a href=\"#\" class=\"ui-messages-close\" (click)=\"clear($event)\" *ngIf=\"closable\">\n                <i class=\"fa fa-close\"></i>\n            </a>\n            <span class=\"ui-messages-icon fa fa-fw fa-2x\" [ngClass]=\"icon\"></span>\n            <ul>\n                <li *ngFor=\"let msg of value\">\n                    <span class=\"ui-messages-summary\">{{msg.summary}}</span>\n                    <span class=\"ui-messages-detail\">{{msg.detail}}</span>\n                </li>\n            </ul>\n        </div>\n    "
                },] },
    ];
    /** @nocollapse */
    Messages.ctorParameters = [];
    Messages.propDecorators = {
        'value': [{ type: Input },],
        'closable': [{ type: Input },],
    };
    return Messages;
}());
export var MessagesModule = (function () {
    function MessagesModule() {
    }
    MessagesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: [Messages],
                    declarations: [Messages]
                },] },
    ];
    /** @nocollapse */
    MessagesModule.ctorParameters = [];
    return MessagesModule;
}());
//# sourceMappingURL=messages.js.map