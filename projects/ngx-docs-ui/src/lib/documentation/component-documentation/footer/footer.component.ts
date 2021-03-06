import { Component, ComponentFactoryResolver, Inject, OnInit, ViewContainerRef } from '@angular/core';
import { NXV_FOOTER } from './../../../core/tokens';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'nxv-footer',
  templateUrl: './footer.component.html',
  styles: [`
    :host {
      display: block;
      flex-shrink: 0;
    }
  `]
})
export class NxvFooterComponent implements OnInit {

  constructor(
    @Inject(NXV_FOOTER) private _footerComponent: any,
    private _componentFactoryResolver: ComponentFactoryResolver,
    private _viewContainerRef: ViewContainerRef,
  ) {}

  ngOnInit() {
    const componentFactory = this._componentFactoryResolver.resolveComponentFactory(this._footerComponent);
    this._viewContainerRef.clear();

    const componentRef = this._viewContainerRef.createComponent(componentFactory);
  }
}
