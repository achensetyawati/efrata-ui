export class Index {
    configureRouter(config, router) {
    config.map([
            { route: ['', 'list'], moduleId: './list', name: 'list', nav: false, title: 'List: Signature Master' },
            { route: 'create', moduleId: './create', name: 'create', nav: false, title: 'Create: Signature Master' },
            { route: 'view/:id', moduleId: './view', name: 'view', nav: false, title: 'View:  Signature Master' },
            { route: 'edit/:id', moduleId: './edit', name: 'edit', nav: false, title: 'Edit: Signature Master' },
        ]);

        this.router = router;
    }
}
