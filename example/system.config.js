(function(global) {
    var map = {
        'app': 'app',
        '@angular': 'node_modules/@angular',
        'rxjs': 'node_modules/rxjs',
        'ng2-simple-components': 'node_modules/ng2-simple-components'
    };

    var packages = {
            'app': {main: 'main.js', defaultExtension: 'js' },
            'rxjs': {defaultExtension: 'js'},
            'ng2-simple-components': { main: 'components.js', defaultExtension: 'js' }
        },
        ngPackageNames = [
            'common',
            'compiler',
            'core',
            'platform-browser',
            'platform-browser-dynamic',
            'forms',
            'upgrade'
        ];

    function packUmd(pkgName) { packages['@angular/'+pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' }}

    ngPackageNames.forEach(packUmd);
    var config = {
        map: map,
        packages: packages
    };
    System.config(config);
})(this);