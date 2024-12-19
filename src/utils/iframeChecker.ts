import axios from 'axios';

export async function isEmbeddable(url: string): Promise<boolean> {
    try {
        const response = await axios.head(url);
        const xFrameOptions = response.headers['x-frame-options'];
        const contentSecurityPolicy = response.headers['content-security-policy'];

        if (xFrameOptions) {
            if (xFrameOptions.toLowerCase() === 'deny' || xFrameOptions.toLowerCase() === 'sameorigin') {
                return false;
            }
        }

        if (contentSecurityPolicy) {
            const directives = contentSecurityPolicy.split(';');
            for (const directive of directives) {
                if (directive.trim().startsWith('frame-ancestors')) {
                    return false;
                }
            }
        }

        return true;
    } catch (error) {
        console.error('Error checking embeddability:', error);
        return false;
    }
}