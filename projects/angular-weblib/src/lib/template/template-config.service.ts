import { ElementRef, EventEmitter, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TemplateConfigService {

    public isMobileDesign = false;

    public resize: EventEmitter<Event> = new EventEmitter<Event>();

    private nav: ElementRef;

    constructor() {
    }

    public setGlobalNavigationContainer(nav: ElementRef) {
        this.nav = nav;
    }

    public getGlobalNavigationContainer(): ElementRef {
        return this.nav;
    }

    public onResize(event?: Event) {

        let w: Window;

        if (event) {

            w = <Window>event.target;
        } else {

            w = window;
        }

        // width from bootstrap layout
        if (w.innerWidth < 991.98) {
            this.isMobileDesign = true;
        } else {
            this.isMobileDesign = false;
        }

        this.resize.emit(event);
    }
}
