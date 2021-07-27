import { Application } from 'express';
import cors  from 'cors';
import { Env } from '../providers/Env';

class CORS {
	public mount(_express: Application): Application {
		const options = cors({
			origin: Env.configItem('SITE_URL'),
			optionsSuccessStatus: 200
		});
		_express.use(options);
		return _express;
	}
}

export default new CORS;