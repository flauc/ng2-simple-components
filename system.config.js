(function(global) {

    var map = {
            'app': 'app',
            '@angular': 'node_modules/@angular',
            'rxjs': 'node_modules/rxjs',
            'ng2-simple-components': 'node_modules/ng2-simple-components'
        },
        packages = {
            'app': { main: 'main.js',  defaultExtension: 'js' },
            'rxjs': { defaultExtension: 'js' },
            'ng2-simple-components': {main: 'components.js', defaultExtension: 'js'}
        },
        ngPackageNames = [
            'common',
            'compiler',
            'core',
            'platform-browser',
            'platform-browser-dynamic',
            'upgrade'
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