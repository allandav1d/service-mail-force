

// Docs: https://adminjs.co/docs/custom-branding
const branding = () => {
    await Promise.all([
        const teste = import('adminjs').then(({ default: AdminJS }) => AdminJS),

        
    ]);
            


    return {
        companyName: 'MailForce',
        softwareBrothers: false,
        withMadeWithLove: false,
        logo: process.env.APP_URL + '/assets/images/logo.svg',
        logoDark: process.env.APP_URL + '/assets/images/logo.svg',
        favicon: process.env.APP_URL + '/assets/images/favicon/favicon.ico',
    }
};

export default branding;