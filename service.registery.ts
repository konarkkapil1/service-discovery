import { IServiceRegistery } from './service.registery.interface';
import { dev } from './config/dev';

export class DevServiceRegistery implements IServiceRegistery {
    public get (service: string) {
        return dev['api'];
    }
}

export class ProdServiceRegistry implements IServiceRegistery {
    public get (service: string) {
        return {
            "name": service
        };
    }
}

export class StageServiceRegistry implements IServiceRegistery {
    public get (service: string) {
        return {
            "name": service
        };
    }
}