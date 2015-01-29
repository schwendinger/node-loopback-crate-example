var Table = require('cli-table');

module.exports = function(app) {
    var ds = app.dataSources;
    ds.crateDs.autoupdate(function () {
        ds.crateDs.discoverModelProperties('Person', function (err, props) {
            if (err) {
                console.log('Could not create or update models.');
            } else {
                console.log('Auto updated models');
                var table = new Table({
                    head: ['Table name', 'Column name', 'Type', 'Nullable']
                });
                for (var i = 0; i < props.length; i++) {
                    var prop = props[i];
                    var row = [
                        prop.tableName,
                        prop.columnName,
                        prop.type,
                        prop.nullable
                    ];
                    table.push(row);
                }
                console.log(table.toString());
            }
        });
    });
};

