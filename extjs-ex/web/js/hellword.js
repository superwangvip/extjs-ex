Ext.application({
    name:'HelloWord',
    launch:function () {
        Ext.create('Ext.container.Viewport',{
            layout:'fit',
            items:[
                {
                    title:'Hello Ext',
                    html:'Heleeeelo! dd js'
                }
            ]
        });
    }
});