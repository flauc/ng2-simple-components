(function(global) {

    var map = {
            'app': 'app',
            '@angular': 'node_modules/@angular',
            'rxjs': 'node_modules/rxjs',
            'easy-forms': 'node_modules/angular2-easy-forms',
            // @ngrx/core
            '@ngrx/core': 'node_modules/@ngrx/core'
        },
        packages = {
            'app': { main: 'main.js',  defaultExtension: 'js' },
            'rxjs': { defaultExtension: 'js' },
            'easy-forms': {main: 'components.js', defaultExtension: 'js'},
            // @ngrx/core package
            '@ngrx/core': { main: 'index.js', defaultExtension: 'js'}
        },
        ngPackageNames = [
            'common',
            'compiler',
            'core',
            'http',
            'platform-browser',
            'platform-browser-dynamic',
            'upgrade',
            'router',
            'forms'
        ];

    function packIndex(pkgName) {packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' }}

    function packUmd(pkgName) {packages['@angular/'+pkgName] = { main: '/bundles/' + pkgName + '.umd.min.js', defaultExtension: 'js' }}

    var setPackageConfig = packUmd;
    ngPackageNames.forEach(setPackageConfig);
    var config = {
        map: map,
        packages: packages
    };

    System.config(config);

})(this);