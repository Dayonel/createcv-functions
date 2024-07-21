import apiRouter from './router';

export default {
	async fetch(request): Promise<Response> {
		return apiRouter.handle(request);
	},
} satisfies ExportedHandler<Env>;
