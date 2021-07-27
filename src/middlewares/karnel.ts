import { Application } from 'express';
import CORS from './CORS';

class karnel{
    public static init(_express:Application):Application{
        _express = CORS.mount(_express);

        return _express;
    }
}
export default karnel;