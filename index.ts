import { 
    DevServiceRegistery,
    ProdServiceRegistry,
    StageServiceRegistry
} from './service.registery.js';

export class ServiceFactory {
    _env: string = 'dev';

    public setEnv (env: string) {
        this._env = env.toLowerCase().trim();
        return this;
    }

    public getServiceRegistery () {
        if (this._env === 'prod') {
            return new ProdServiceRegistry();
        } else if (this._env === 'stage') {
            return new StageServiceRegistry();
        }
        return new DevServiceRegistery();
    }

}

console.log(`${JSON.stringify(new ServiceFactory().setEnv('dev').getServiceRegistery().get('auth'), null, 4)}`);