export interface MenuItemModel {
    onClick($event: Event): void;
    onHold($event: Event): void;
    getName(): string;
    getIcon(): string;
    getPriority(): number;
}
