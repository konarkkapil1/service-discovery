import { IServiceDiscovery } from "./service.discovery.interface";
import dev from './dev.json'
import prod from './prod.json';


export class DevServiceDiscovery implements IServiceDiscovery {
    public get(service: string): object {
        console.log(`dev: ${JSON.stringify(dev, null, 4)}`);
        return dev['api'];
    }
}

export class ProdServiceDiscovery implements IServiceDiscovery {
    public get(service: string): object {
        console.log(`prod: ${prod}`);
        return prod['api'];
    }
}