import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2, Optional } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
	selector: '[appTextFilter]'
})

export class TextFilterDirective implements OnInit {
	@Input() length = 50;
	@Input() regexStr = '^[a-zA-Z0-9-).,(_ ]*$';

	constructor(private el: ElementRef, private renderer: Renderer2, @Optional() private control: NgControl) { }

	ngOnInit() {
		this.renderer.setAttribute(this.el.nativeElement, 'maxLength', this.length.toString());
		this.el.nativeElement.value = this.el.nativeElement.value.trim().replace(/\s\s+/g, ' ');
		if (this.control) {
			this.control.control.setValue(this.el.nativeElement.value);
		}
	}

	@HostListener('keypress', ['$event']) onKeyPress(event) {
		return new RegExp(this.regexStr).test(event.key);
	}

	@HostListener('paste', ['$event']) blockPaste(event: KeyboardEvent) {
		setTimeout(() => {
			this.el.nativeElement.value = this.el.nativeElement.value.trim().replace(/\s\s+/g, ' ');
			const defaultRegex = this.regexStr.replace('^[', '[^').replace('*$', '');
			this.el.nativeElement.value = this.el.nativeElement.value.replace(new RegExp(defaultRegex, 'g'), '');
			if (this.control) {
				this.control.control.setValue(this.el.nativeElement.value);
			}
		}, 100);
	}

	@HostListener('blur') onblur() {
		this.el.nativeElement.value = this.el.nativeElement.value.trim().replace(/\s\s+/g, ' ');
		if (this.control) {
			this.control.control.setValue(this.el.nativeElement.value);
		}
	}

}
