(function(global) {
    var map = {
        'app':                        'app', // 'dist',
        '@angular':                   'node_modules/@angular',
        'rxjs':                       'node_modules/rxjs'
    };

    var packages = {
            'app': {main: 'main.js', defaultExtension: 'js' },
            'rxjs': {defaultExtension: 'js'}
        },
        ngPackageNames = [
            'common',
            'compiler',
            'core',
            'platform-browser',
            'platform-browser-dynamic',
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