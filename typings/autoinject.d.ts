declare module "autoinject" {
    export function autoInject(target: any): any;
    export function autoInstantiate(target: any): any;
    export function inject(obj: any): any;
    export function dependencyInjection(Cls: any): any
}
