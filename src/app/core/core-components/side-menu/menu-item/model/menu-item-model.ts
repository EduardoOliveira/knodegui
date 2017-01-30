export interface MenuItemModel {
    onClick($event: Event): void;
    onHold($event: Event): void;
    getName(): string;
    getIcon(): {type: string, name: string};
    getPriority(): number;
}
