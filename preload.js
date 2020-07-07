utools.onPluginReady(() => {
    console.log('插件装配完成，已准备好')
})

utools.onPluginEnter(({code, type, payload, optional}) => {
    initSimpleTransl(payload);
})