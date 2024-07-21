import { Router } from 'itty-router';
import { confirmEmail } from './confirm';
import { resetEmail } from './reset';

// now let's create a router (note the lack of "new")
const router = Router();
const domain = 'https://createcv.app';

router.get('/', () => new Response('OK!'));

router.get('/confirm/:loginCode', ({ params }) => new Response(confirmEmail(params.loginCode)));
router.get('/reset-password/:token', ({ params }) => new Response(resetEmail(`${domain}/reset-password?token=${params.token}`)));

router.all('*', () => new Response('Not Found.', { status: 404 }));

export default router;
