import {Component, OnInit, HostBinding, ComponentFactoryResolver, Input, ReflectiveInjector, ViewChild, ViewContainerRef} from '@angular/core';
import {WidgetModel} from "./model/widget-model";

@Component({
    selector: 'widget',
    templateUrl: './widget.component.html',
    styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {
    private currentComponent = null;
    private resolver: ComponentFactoryResolver;
    @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) dynamicComponentContainer: ViewContainerRef;

    //@HostBinding('class') private classes = 'size-third';
    //http://blog.rangle.io/dynamically-creating-components-with-angular-2/
    //http://plnkr.co/edit/ZXsIWykqKZi5r75VMtw2?p=preview

    constructor(resolver: ComponentFactoryResolver) {
        this.resolver = resolver;
    }

    @Input() set model(model: WidgetModel) {
        if (!model) {
            return;
        }

        // Inputs need to be in the following format to be resolved properly
        let inputProviders = Object.keys(model.getInputs()).map((inputName) => {
            return {provide: inputName, useValue: model.getInputs()[inputName]};
        });
        let resolvedInputs = ReflectiveInjector.resolve(inputProviders);

        // We create an injector out of the data we want to pass down and this components injector
        let injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.dynamicComponentContainer.parentInjector);

        // We create a factory out of the component we want to create
        let factory = this.resolver.resolveComponentFactory(model.getComponent());

        // We create the component using the factory and the injector
        let component = factory.create(injector);

        // We insert the component into the dom container
        this.dynamicComponentContainer.insert(component.hostView);

        // We can destroy the old component is we like by calling destroy
        if (this.currentComponent) {
            this.currentComponent.destroy();
        }

        this.currentComponent = component;
    }

    ngOnInit() {
    }

}
