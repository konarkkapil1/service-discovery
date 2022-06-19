import { DevServiceDiscovery, ProdServiceDiscovery } from "./service.discovery";
import { IServiceDiscovery } from "./service.discovery.interface";

export class ServiceDiscoveryFactory {
    public static getServiceDiscovery(env: string | undefined): IServiceDiscovery {
        if (env && env === 'prod') {
            return new ProdServiceDiscovery()
        } else {
            return new DevServiceDiscovery()
        }
    }
}

console.log(ServiceDiscoveryFactory.getServiceDiscovery(undefined).get('api'));