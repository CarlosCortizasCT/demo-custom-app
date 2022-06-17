(self.webpackChunkcarlos_17062022=self.webpackChunkcarlos_17062022||[]).push([[7770],{"./src/hooks/use-channels-connector/fetch-channel-details.ctp.graphql":e=>{var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"FetchChannelDetails"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"channelId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"channel"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"channelId"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"version"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"key"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"roles"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"nameAllLocales"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"locale"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"value"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:172}};n.loc.source={body:"query FetchChannelDetails($channelId: String!) {\n  channel(id: $channelId) {\n    id\n    version\n    key\n    roles\n    nameAllLocales {\n      locale\n      value\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function collectFragmentReferences(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){collectFragmentReferences(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){collectFragmentReferences(e,n)})),e.definitions&&e.definitions.forEach((function(e){collectFragmentReferences(e,n)}))}var t={};function findOperation(e,n){for(var t=0;t<e.definitions.length;t++){var a=e.definitions[t];if(a.name&&a.name.value==n)return a}}!function extractReferences(){n.definitions.forEach((function(e){if(e.name){var n=new Set;collectFragmentReferences(e,n),t[e.name.value]=n}}))}(),e.exports=n,e.exports.FetchChannelDetails=function oneQuery(e,n){var a={kind:e.kind,definitions:[findOperation(e,n)]};e.hasOwnProperty("loc")&&(a.loc=e.loc);var i=t[n]||new Set,o=new Set,l=new Set;for(i.forEach((function(e){l.add(e)}));l.size>0;){var r=l;l=new Set,r.forEach((function(e){o.has(e)||(o.add(e),(t[e]||new Set).forEach((function(e){l.add(e)})))}))}return o.forEach((function(n){var t=findOperation(e,n);t&&a.definitions.push(t)})),a}(n,"FetchChannelDetails")},"./src/hooks/use-channels-connector/fetch-channels.ctp.graphql":e=>{var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"FetchChannels"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"limit"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"offset"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"sort"}},type:{kind:"ListType",type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"channels"},arguments:[{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"Variable",name:{kind:"Name",value:"limit"}}},{kind:"Argument",name:{kind:"Name",value:"offset"},value:{kind:"Variable",name:{kind:"Name",value:"offset"}}},{kind:"Argument",name:{kind:"Name",value:"sort"},value:{kind:"Variable",name:{kind:"Name",value:"sort"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"total"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"count"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"offset"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"results"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"key"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"roles"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"nameAllLocales"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"locale"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"value"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:275}};n.loc.source={body:"query FetchChannels($limit: Int!, $offset: Int!, $sort: [String!]) {\n  channels(limit: $limit, offset: $offset, sort: $sort) {\n    total\n    count\n    offset\n    results {\n      id\n      key\n      roles\n      nameAllLocales {\n        locale\n        value\n      }\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function collectFragmentReferences(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){collectFragmentReferences(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){collectFragmentReferences(e,n)})),e.definitions&&e.definitions.forEach((function(e){collectFragmentReferences(e,n)}))}var t={};function findOperation(e,n){for(var t=0;t<e.definitions.length;t++){var a=e.definitions[t];if(a.name&&a.name.value==n)return a}}!function extractReferences(){n.definitions.forEach((function(e){if(e.name){var n=new Set;collectFragmentReferences(e,n),t[e.name.value]=n}}))}(),e.exports=n,e.exports.FetchChannels=function oneQuery(e,n){var a={kind:e.kind,definitions:[findOperation(e,n)]};e.hasOwnProperty("loc")&&(a.loc=e.loc);var i=t[n]||new Set,o=new Set,l=new Set;for(i.forEach((function(e){l.add(e)}));l.size>0;){var r=l;l=new Set,r.forEach((function(e){o.has(e)||(o.add(e),(t[e]||new Set).forEach((function(e){l.add(e)})))}))}return o.forEach((function(n){var t=findOperation(e,n);t&&a.definitions.push(t)})),a}(n,"FetchChannels")},"./src/hooks/use-channels-connector/update-channel-details.ctp.graphql":e=>{var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"UpdateChannelDetails"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"channelId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"version"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Long"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"actions"}},type:{kind:"NonNullType",type:{kind:"ListType",type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ChannelUpdateAction"}}}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"updateChannel"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"channelId"}}},{kind:"Argument",name:{kind:"Name",value:"version"},value:{kind:"Variable",name:{kind:"Name",value:"version"}}},{kind:"Argument",name:{kind:"Name",value:"actions"},value:{kind:"Variable",name:{kind:"Name",value:"actions"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"version"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"key"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"roles"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"nameAllLocales"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"locale"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"value"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:278}};n.loc.source={body:"mutation UpdateChannelDetails(\n  $channelId: String!\n  $version: Long!\n  $actions: [ChannelUpdateAction!]!\n) {\n  updateChannel(id: $channelId, version: $version, actions: $actions) {\n    id\n    version\n    key\n    roles\n    nameAllLocales {\n      locale\n      value\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function collectFragmentReferences(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){collectFragmentReferences(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){collectFragmentReferences(e,n)})),e.definitions&&e.definitions.forEach((function(e){collectFragmentReferences(e,n)}))}var t={};function findOperation(e,n){for(var t=0;t<e.definitions.length;t++){var a=e.definitions[t];if(a.name&&a.name.value==n)return a}}!function extractReferences(){n.definitions.forEach((function(e){if(e.name){var n=new Set;collectFragmentReferences(e,n),t[e.name.value]=n}}))}(),e.exports=n,e.exports.UpdateChannelDetails=function oneQuery(e,n){var a={kind:e.kind,definitions:[findOperation(e,n)]};e.hasOwnProperty("loc")&&(a.loc=e.loc);var i=t[n]||new Set,o=new Set,l=new Set;for(i.forEach((function(e){l.add(e)}));l.size>0;){var r=l;l=new Set,r.forEach((function(e){o.has(e)||(o.add(e),(t[e]||new Set).forEach((function(e){l.add(e)})))}))}return o.forEach((function(n){var t=findOperation(e,n);t&&a.definitions.push(t)})),a}(n,"UpdateChannelDetails")},"./src/components/welcome/web-developer.svg":e=>{e.exports="data:image/svg+xml,%3csvg id='e8c09660-db65-4061-a2dc-920e909a0453' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' width='1057.99365' height='557' viewBox='0 0 1057.99365 557'%3e%3ctitle%3eweb_development%3c/title%3e%3cpath d='M1000.12219,420.11243,899.99683,467.5l88.61529-66.2619a500.05588,500.05588,0,0,0-48.38385-63.66846L505.99683,445.5,898.23022,295.87646a499.98052,499.98052,0,0,0-56.95764-43.41418L179.60608,359.03943A495.88009,495.88009,0,0,0,71.00317,668.5h995.98731A495.6132,495.6132,0,0,0,1000.12219,420.11243Z' transform='translate(-71.00317 -171.5)' fill='%23f2f2f2'/%3e%3cpath d='M787.12,221.69537A495.97179,495.97179,0,0,0,568.99683,171.5c-153.82965,0-291.36139,69.75269-382.71033,179.34869C342.71289,316.57422,615.06372,257.24316,787.12,221.69537Z' transform='translate(-71.00317 -171.5)' fill='%23f2f2f2'/%3e%3cpath d='M1066.99683,666.5c0,15.464-143.7166,62-321,62s-321-46.536-321-62,143.71659,6,321,6S1066.99683,651.036,1066.99683,666.5Z' transform='translate(-71.00317 -171.5)' fill='%233f3d56'/%3e%3cpath d='M1066.99683,666.5c0,15.464-143.7166,62-321,62s-321-46.536-321-62,143.71659,6,321,6S1066.99683,651.036,1066.99683,666.5Z' transform='translate(-71.00317 -171.5)' opacity='0.1'/%3e%3cellipse cx='674.99365' cy='495' rx='321' ry='28' fill='%233f3d56'/%3e%3cpath d='M656.64413,438.62638s12.91086,20.47705,8.29993,26.02136,34.59341,5.68291,34.59341,5.68291-5.88892-29.78793-4.15568-36.64328Z' transform='translate(-71.00317 -171.5)' fill='%23ffb8b8'/%3e%3cpath d='M656.64413,438.62638s12.91086,20.47705,8.29993,26.02136,34.59341,5.68291,34.59341,5.68291-5.88892-29.78793-4.15568-36.64328Z' transform='translate(-71.00317 -171.5)' opacity='0.1'/%3e%3ccircle cx='606.27433' cy='234.063' r='40.48447' fill='%23ff6584'/%3e%3cpolygon points='701.494 453.5 701.494 477.5 725.494 472.5 723.494 455.5 701.494 453.5' fill='%23ffb8b8'/%3e%3cpath d='M857.49683,629l67,11-17,25s-47-16-59-16S857.49683,629,857.49683,629Z' transform='translate(-71.00317 -171.5)' fill='%23ffb8b8'/%3e%3cpath d='M705.49683,581s50-58,66-55,23,21,23,21l9,89s-32,3-32,0-6-67-6-67-47,104-72,35Z' transform='translate(-71.00317 -171.5)' fill='%232f2e41'/%3e%3cpath d='M624.49683,620s1,50,31,53,63-20,63-20l54-25.87008s64,33.87008,83,24.87008c0,0,20-21,7-27s-1,0-1,0l-77-40s-15-4-41,7-61,16-61,16Z' transform='translate(-71.00317 -171.5)' fill='%232f2e41'/%3e%3ccircle cx='603.49365' cy='247.5' r='30' fill='%23ffb8b8'/%3e%3cpath d='M717.49683,503l-2,42s1,55-8,59c-4.55,2.02-13.69,6.08-22.14,10.52-6.34,3.32-12.29,6.84-15.61,9.87a11.19431,11.19431,0,0,0-2.25,2.61c-4,7-30,6-36,1s-2,6-7,8c-4.84,1.94-11.55-13.92-7.44-37.6.13-.79.28-1.59.44-2.4,4.59-22.95-2.62-77.92-1.51-99.16a37.36888,37.36888,0,0,1,.51-4.84c3-16,41.28-48.56,48.44-34.69,8.82,17.12,29.08,1.48,32.56-6.31,20-1,27,23,27,23Z' transform='translate(-71.00317 -171.5)' fill='%233f3d56'/%3e%3cpath d='M798.49683,640s-16,6-21,5-10,3-10,9-6,20,3,21,46-1,54,2c0,0,36,1,33-14s-18-14-18-14S798.49683,647,798.49683,640Z' transform='translate(-71.00317 -171.5)' fill='%232f2e41'/%3e%3cpath d='M915.49683,643s2-6,5-6,27,4,30,3,38-3,32,14-26,19-26,19-36-4-41-3-23,0-20-5S917.49683,651,915.49683,643Z' transform='translate(-71.00317 -171.5)' fill='%232f2e41'/%3e%3cpath d='M824.47088,499.36345l5.48617,22.63046a1.41354,1.41354,0,0,1-.02746.76382l-24.88642,77.77a1.4135,1.4135,0,0,1-2.75071-.2712l-3.44274-30.29616a1.41351,1.41351,0,0,1,.06051-.59751l22.843-70.10435A1.4135,1.4135,0,0,1,824.47088,499.36345Z' transform='translate(-71.00317 -171.5)' fill='%23d0cde1'/%3e%3cpolygon points='751.45 329.775 756.515 349.191 734.565 420.104 729.5 398.155 751.45 329.775' fill='%23f2f2f2'/%3e%3cpath d='M711.862,606.80006c.84421,2.53261,87.79721-.8442,88.64141-1.68841a18.32436,18.32436,0,0,0,1.85721-3.37681c.7936-1.68841,1.51961-3.37682,1.51961-3.37682l-3.37682-27.33532-86.1088-3.056s-2.15276,23.165-2.59176,33.76816A25.33138,25.33138,0,0,0,711.862,606.80006Z' transform='translate(-71.00317 -171.5)' fill='%23d0cde1'/%3e%3cpolygon points='718.526 403.22 720.214 426.858 682.225 426.858 682.225 403.22 718.526 403.22' opacity='0.1'/%3e%3cpolygon points='669.562 410.818 669.789 410.773 668.718 420.949 647.612 420.949 647.612 410.818 669.562 410.818' opacity='0.1'/%3e%3cpath d='M711.862,606.80006c.84421,2.53261,87.79721-.8442,88.64141-1.68841a18.32436,18.32436,0,0,0,1.85721-3.37681H711.80287A25.33138,25.33138,0,0,0,711.862,606.80006Z' transform='translate(-71.00317 -171.5)' opacity='0.1'/%3e%3cpath d='M698.40919,333.5a22.12987,22.12987,0,0,1-12.76894,8.778c-8.929,2.391-.07293,15.80887-.07293,15.80887s-3.22041-4.87923,1.42459-10.04646S699.1119,339.34049,698.40919,333.5Z' transform='translate(-71.00317 -171.5)' fill='%23ff6584'/%3e%3ccircle cx='612.98182' cy='189.80566' r='11.28256' fill='%23ff6584'/%3e%3cpath d='M698.38979,370.7623c-9.19775-3.47892-24.51282-5.2429-32.392-4.03709l1.0806-7.8905c7.57488,3.91493,22.81967,5.7547,32.392,4.03709Z' transform='translate(-71.00317 -171.5)' fill='%233f3d56'/%3e%3cpath d='M680.59215,373.5867s-11.52728,19.17376-38.3321,26.35147-.219,47.45791-.219,47.45791-9.66758-14.64735,4.27659-30.15928S682.70167,391.11973,680.59215,373.5867Z' transform='translate(-71.00317 -171.5)' fill='%23ff6584'/%3e%3cpath d='M681.507,372.42157s11.07394,26.336,23.2314,28.82592,11.23534,44.10345-7.777,50.34359c0,0,13.86347-24.39564,2.01338-40.75671S679.6396,381.53967,681.507,372.42157Z' transform='translate(-71.00317 -171.5)' fill='%23ff6584'/%3e%3cpath d='M685.35681,614.52c-2.47,4.67-5.37,9.52-5.86,11.48-.33,1.33-3.99.56-9.75-1.61-11.55-4.37-31.57-14.38-50.25-24.39a15.775,15.775,0,0,1-2.44-1.6c.13-.79.28-1.59.44-2.4,4.59-22.95-2.62-77.92-1.51-99.16l8.51-2.84,17,16v68s44,24,47,26C690.02686,605.02,687.91681,609.67,685.35681,614.52Z' transform='translate(-71.00317 -171.5)' opacity='0.1'/%3e%3cpath d='M722.49683,560l27,14s16-17,26-4-29,17-29,17-34-8-35-19S722.49683,560,722.49683,560Z' transform='translate(-71.00317 -171.5)' fill='%23ffb8b8'/%3e%3cpath d='M677.49683,597l16,4s18-22,37-14-24,24-24,24-23,12-32,2S677.49683,597,677.49683,597Z' transform='translate(-71.00317 -171.5)' fill='%23ffb8b8'/%3e%3cpath d='M712.49683,465c1,1,12,9,12,9s3,38-1,46-7,8-4,12,7,1,3,8-8,6-5,9,2,4,2,4l12,10s-7.3623,11.72633-16.68115,10.86317S697.49683,528,697.49683,528Z' transform='translate(-71.00317 -171.5)' fill='%233f3d56'/%3e%3cpath d='M624.49683,489l-9,3s-24,88,4,103,59,30,60,26,12-20,9-22-47-26-47-26V505Z' transform='translate(-71.00317 -171.5)' fill='%233f3d56'/%3e%3cpolygon points='566.994 354 564.994 402 617.994 427 568.994 402 566.994 354' opacity='0.1'/%3e%3cpath d='M1084.09713,633.143c-20.15507,11.88443-28.08825,35.77412-28.08825,35.77412s24.74464,4.62122,44.8997-7.26321,28.08825-35.77412,28.08825-35.77412S1104.25219,621.2586,1084.09713,633.143Z' transform='translate(-71.00317 -171.5)' fill='%233f3d56'/%3e%3cpath d='M1091.15958,640.51126c-11.28676,20.49574-34.9329,29.12782-34.9329,29.12782s-5.34669-24.59808,5.94007-45.09382,34.9329-29.12782,34.9329-29.12782S1102.44634,620.01553,1091.15958,640.51126Z' transform='translate(-71.00317 -171.5)' fill='%23034e7d'/%3e%3ccircle cx='21.99365' cy='228' r='4' fill='%23034e7d'/%3e%3ccircle cx='32.99365' cy='228' r='4' fill='%23034e7d'/%3e%3ccircle cx='43.99365' cy='228' r='4' fill='%23034e7d'/%3e%3crect x='78.99365' y='378.87255' width='58' height='6' fill='%23034e7d' opacity='0.3'/%3e%3crect x='78.99365' y='391.87255' width='54.86486' height='6' fill='%23034e7d' opacity='0.3'/%3e%3crect x='78.99365' y='404.87255' width='39.97297' height='6' fill='%23034e7d' opacity='0.3'/%3e%3cg opacity='0.3'%3e%3crect x='213.99365' y='378.87255' width='58' height='6' fill='%23034e7d'/%3e%3crect x='213.99365' y='391.87255' width='54.86486' height='6' fill='%23034e7d'/%3e%3crect x='213.99365' y='404.87255' width='39.97297' height='6' fill='%23034e7d'/%3e%3crect x='213.99365' y='378.87255' width='58' height='6' fill='%23034e7d' opacity='0.3'/%3e%3crect x='213.99365' y='391.87255' width='54.86486' height='6' fill='%23034e7d' opacity='0.3'/%3e%3crect x='213.99365' y='404.87255' width='39.97297' height='6' fill='%23034e7d' opacity='0.3'/%3e%3c/g%3e%3crect x='353.99365' y='378.87255' width='58' height='6' fill='%23034e7d' opacity='0.3'/%3e%3crect x='353.99365' y='391.87255' width='54.86486' height='6' fill='%23034e7d' opacity='0.3'/%3e%3crect x='353.99365' y='404.87255' width='39.97297' height='6' fill='%23034e7d' opacity='0.3'/%3e%3crect x='70.99365' y='300.87255' width='74' height='66' fill='%23034e7d' opacity='0.3'/%3e%3crect x='205.99365' y='300.87255' width='74' height='66' fill='%233f3d56'/%3e%3crect x='345.99365' y='300.87255' width='74' height='66' fill='%233f3d56'/%3e%3cpath d='M304.35546,538.09512l-.97627-.01907c.021-1.08114.63114-26.56133,10.66219-33.604l.56059.79893C304.97563,512.02955,304.36022,537.83532,304.35546,538.09512Z' transform='translate(-71.00317 -171.5)' fill='%23034e7d'/%3e%3ccircle cx='248.19984' cy='327.76848' r='4.88134' fill='%23034e7d'/%3e%3cpath d='M318.2161,516.50423a15.19762,15.19762,0,0,1-7.84148.33859,13.85016,13.85016,0,0,1,14.23984-4.88441A15.19753,15.19753,0,0,1,318.2161,516.50423Z' transform='translate(-71.00317 -171.5)' fill='%23034e7d'/%3e%3cpath d='M444.35546,538.09512l-.97627-.01907c.021-1.08114.63114-26.56133,10.66219-33.604l.56059.79893C444.97563,512.02955,444.36022,537.83532,444.35546,538.09512Z' transform='translate(-71.00317 -171.5)' fill='%23034e7d'/%3e%3ccircle cx='388.19984' cy='327.76848' r='4.88134' fill='%23034e7d'/%3e%3cpath d='M458.2161,516.50423a15.19762,15.19762,0,0,1-7.84148.33859,13.85016,13.85016,0,0,1,14.23984-4.88441A15.19753,15.19753,0,0,1,458.2161,516.50423Z' transform='translate(-71.00317 -171.5)' fill='%23034e7d'/%3e%3cpath d='M555.99683,665.5h-479v-277h479Zm-477-2h475v-273h-475Z' transform='translate(-71.00317 -171.5)' fill='%232f2e41'/%3e%3crect x='6.99365' y='237.06494' width='477' height='2' fill='%232f2e41'/%3e%3c/svg%3e"},"./src/constants.js":(e,n,t)=>{"use strict";t.d(n,{_:()=>a});var a=(0,t("./node_modules/@commercetools-frontend/application-shell/ssr/dist/commercetools-frontend-application-shell-ssr.esm.js").X7)("carlos-17062022")},"./src/helpers.js":(e,n,t)=>{"use strict";t.d(n,{CF:()=>k,dF:()=>p,e$:()=>h});var a=t("./node_modules/@babel/runtime-corejs3/helpers/esm/toConsumableArray.js"),i=t("./node_modules/@babel/runtime-corejs3/helpers/esm/objectWithoutProperties.js"),o=t("./node_modules/@babel/runtime-corejs3/helpers/esm/defineProperty.js"),l=t("./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js"),r=t.n(l),s=t("./node_modules/@babel/runtime-corejs3/core-js-stable/instance/reduce.js"),c=t.n(s),d=t("./node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js"),m=t.n(d),u=t("./node_modules/@commercetools-frontend/l10n/dist/commercetools-frontend-l10n.esm.js"),f=["action"],h=function getErrorMessage(e){var n;return(null===(n=e.graphQLErrors)||void 0===n?void 0:r()(n).call(n,(function(e){return e.message})).join("\n"))||e.message},p=function extractErrorFromGraphQlResponse(e){var n,t,a,i;return(null===(n=e.networkError)||void 0===n||null===(t=n.result)||void 0===t||null===(a=t.errors)||void 0===a?void 0:a.length)>0?e.networkError.result.errors:(null===(i=e.graphQLErrors)||void 0===i?void 0:i.length)>0?e.graphQLErrors:e},v=function convertAction(e,n){return(0,o.Z)({},e,"changeName"===e?function getNameFromPayload(e){return{name:(0,u.UK)(e.name)}}(n):n)},k=function createGraphQlUpdateActions(e){return c()(e).call(e,(function(e,n){var t,o=n.action,l=(0,i.Z)(n,f);return m()(t=[]).call(t,(0,a.Z)(e),[v(o,l)])}),[])}},"./src/hooks/use-channels-connector/index.js":(e,n,t)=>{"use strict";t.d(n,{wP:()=>b,EE:()=>Z,t8:()=>y});var a=t("./node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js"),i=t("./node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js"),o=t("./node_modules/@babel/runtime-corejs3/regenerator/index.js"),l=t.n(o),r=t("./node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js"),s=t.n(r),c=t("./node_modules/@commercetools-frontend/application-shell/dist/commercetools-frontend-application-shell.esm.js"),d=t("./node_modules/@commercetools-frontend/constants/dist/commercetools-frontend-constants.esm.js"),m=t("./node_modules/@commercetools/sync-actions/dist/sync-actions.umd.js"),u=t("./src/helpers.js"),f=t("./src/hooks/use-channels-connector/fetch-channels.ctp.graphql"),h=t.n(f),p=t("./src/hooks/use-channels-connector/fetch-channel-details.ctp.graphql"),v=t.n(p),k=t("./src/hooks/use-channels-connector/update-channel-details.ctp.graphql"),g=t.n(k),y=function useChannelsFetcher(e){var n,t=e.page,a=e.perPage,i=e.tableSorting,o=(0,c.VK)(h(),{variables:{limit:a.value,offset:(t.value-1)*a.value,sort:[s()(n="".concat(i.value.key," ")).call(n,i.value.order)]},context:{target:d.C5.COMMERCETOOLS_PLATFORM}}),l=o.data,r=o.error,m=o.loading;return{channelsPaginatedResult:null===l||void 0===l?void 0:l.channels,error:r,loading:m}},b=function useChannelDetailsFetcher(e){var n=(0,c.VK)(v(),{variables:{channelId:e},context:{target:d.C5.COMMERCETOOLS_PLATFORM}}),t=n.data,a=n.error,i=n.loading;return{channel:null===t||void 0===t?void 0:t.channel,error:a,loading:i}},Z=function useChannelDetailsUpdater(){var e=(0,c.qK)(g()),n=(0,i.Z)(e,2),t=n[0],o=n[1].loading,r=(0,m.createSyncChannels)(),s=function(){var e=(0,a.Z)(l().mark((function _callee(e){var n,a,i;return l().wrap((function _callee$(o){for(;;)switch(o.prev=o.next){case 0:return n=e.originalDraft,a=e.nextDraft,i=r.buildActions(a,n),o.prev=2,o.next=5,t({context:{target:d.C5.COMMERCETOOLS_PLATFORM},variables:{channelId:n.id,version:n.version,actions:(0,u.CF)(i)}});case 5:return o.abrupt("return",o.sent);case 8:throw o.prev=8,o.t0=o.catch(2),(0,u.dF)(o.t0);case 11:case"end":return o.stop()}}),_callee,null,[[2,8]])})));return function execute(n){return e.apply(this,arguments)}}();return{loading:o,execute:s}}},"./src/routes.jsx":(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>H});var a=t("./node_modules/react-router/esm/react-router.js"),i=t("./node_modules/@commercetools-frontend/permissions/dist/commercetools-frontend-permissions.esm.js"),o=t("./node_modules/@commercetools-frontend/application-components/dist/commercetools-frontend-application-components.esm.js"),l=t("./node_modules/@commercetools-uikit/spacings/dist/commercetools-uikit-spacings.esm.js"),r=t("./node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js"),s=t.n(r),c=t("./node_modules/react/index.js"),d=t("./node_modules/react-intl/lib/src/components/useIntl.js"),m=t("./node_modules/react-router-dom/esm/react-router-dom.js"),u=t("./node_modules/@commercetools-frontend/application-shell-connectors/dist/commercetools-frontend-application-shell-connectors.esm.js"),f=t("./node_modules/@commercetools-frontend/constants/dist/commercetools-frontend-constants.esm.js"),h=t("./node_modules/@commercetools-uikit/hooks/dist/commercetools-uikit-hooks.esm.js"),p=t("./node_modules/@commercetools-uikit/icons/dist/commercetools-uikit-icons.esm.js"),v=t("./node_modules/@commercetools-uikit/constraints/dist/commercetools-uikit-constraints.esm.js"),k=t("./node_modules/@commercetools-uikit/flat-button/dist/commercetools-uikit-flat-button.esm.js"),g=t("./node_modules/@commercetools-uikit/loading-spinner/dist/commercetools-uikit-loading-spinner.esm.js"),y=t("./node_modules/@commercetools-uikit/data-table/dist/commercetools-uikit-data-table.esm.js"),b=t("./node_modules/@commercetools-uikit/notifications/dist/commercetools-uikit-notifications.esm.js"),Z=t("./node_modules/@commercetools-uikit/pagination/dist/commercetools-uikit-pagination.esm.js"),S=t("./node_modules/@commercetools-uikit/text/dist/commercetools-uikit-text.esm.js"),N=t("./node_modules/@commercetools-frontend/application-shell/dist/commercetools-frontend-application-shell.esm.js"),C=t("./node_modules/@commercetools-frontend/l10n/dist/commercetools-frontend-l10n.esm.js"),w=t("./node_modules/react-intl/lib/index.js");const x=(0,w.vU)({backToWelcome:{id:"Channels.backToWelcome",defaultMessage:"Back to Welcome page"},title:{id:"Channels.title",defaultMessage:"Channels list"},demoHint:{id:"Channels.demoHint",defaultMessage:"This page demonstrates how you can develop a component following some of the Merchant Center UX Guidelines and development best practices. For instance, fetching data using GraphQL, displaying data in a paginated table, writing functional tests, etc."},noResults:{id:"Channels.noResults",defaultMessage:"There are no channels available in this project."}});var j=t("./src/hooks/use-channels-connector/index.js"),M=t("./src/helpers.js"),_=t("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),F=(0,c.lazy)((function(){return Promise.all([t.e(1785),t.e(3696)]).then(t.bind(t,"./src/components/channel-details/index.js"))})),D=[{key:"name",label:"Channel name"},{key:"key",label:"Channel key",isSortable:!0},{key:"roles",label:"Roles"}],T=function Channels(e){var n=(0,d.Z)(),t=(0,a.$B)(),i=(0,a.k6)().push,o=(0,h.nU)(),r=o.page,c=o.perPage,w=(0,h.Bx)({key:"key",order:"asc"}),T=(0,u.UV)((function(e){return{dataLocale:e.dataLocale,projectLanguages:e.project.languages}})),E=T.dataLocale,R=T.projectLanguages,A=(0,j.t8)({page:r,perPage:c,tableSorting:w}),L=A.channelsPaginatedResult,O=A.error,V=A.loading;return O?(0,_.tZ)(b.I,{type:"error",children:(0,_.tZ)(S.Z.Body,{children:(0,M.e$)(O)})}):(0,_.BX)(l.Z.Stack,{scale:"xl",children:[(0,_.BX)(l.Z.Stack,{scale:"xs",children:[(0,_.tZ)(k.Z,{as:m.rU,to:e.linkToWelcome,label:n.formatMessage(x.backToWelcome),icon:(0,_.tZ)(p.xC,{})}),(0,_.tZ)(S.Z.Headline,{as:"h2",intlMessage:x.title})]}),(0,_.tZ)(v.Z.Horizontal,{max:13,children:(0,_.tZ)(b.I,{type:"info",children:(0,_.tZ)(S.Z.Body,{intlMessage:x.demoHint})})}),V&&(0,_.tZ)(g.Z,{}),L?(0,_.BX)(l.Z.Stack,{scale:"l",children:[(0,_.tZ)(y.ZP,{isCondensed:!0,columns:D,rows:L.results,itemRenderer:function itemRenderer(e,n){return function itemRenderer(e,n,t,a){switch(n.key){case"roles":return e.roles.join(", ");case"name":return(0,C.Wb)({name:(0,C.sM)(e.nameAllLocales)},{key:"name",locale:t,fallbackOrder:a,fallback:f.xL});default:return e[n.key]}}(e,n,E,R)},maxHeight:600,sortedBy:w.value.key,sortDirection:w.value.order,onSortChange:w.onChange,onRowClick:function onRowClick(e){var n;return i(s()(n="".concat(t.url,"/")).call(n,e.id))}}),(0,_.tZ)(Z.tl,{page:r.value,onPageChange:r.onChange,perPage:c.value,onPerPageChange:c.onChange,totalItems:L.total}),(0,_.tZ)(a.rs,{children:(0,_.tZ)(N.Kv,{path:"".concat(t.path,"/:id"),children:(0,_.tZ)(F,{onClose:function onClose(){return i("".concat(t.url))}})})})]}):null]})};T.displayName="Channels";const E=T;var R=t("./node_modules/prop-types/index.js"),A=t.n(R),L=t("./node_modules/@commercetools-uikit/grid/dist/commercetools-uikit-grid.esm.js");const O=(0,w.vU)({title:{id:"Welcome.title",defaultMessage:"Develop applications for the Merchant Center"},subtitle:{id:"Welcome.subtitle",defaultMessage:"Welcome to Custom Applications! To get started, inspect the source code to get familiar with the setup, the folder structure, the development tools, etc. and read the README file for additional information."},cardDocumentationTitle:{id:"Welcome.cardDocumentationTitle",defaultMessage:"Documentation"},cardDocumentationContent:{id:"Welcome.cardDocumentationContent",defaultMessage:"Learn more about Custom Applications."},cardDesignSystemTitle:{id:"Welcome.cardDesignSystemTitle",defaultMessage:"Design System"},cardDesignSystemContent:{id:"Welcome.cardDesignSystemContent",defaultMessage:"Explore the UI components to develop Custom Applications and learn more about the Design System."},cardChannelsTitle:{id:"Welcome.cardChannelsTitle",defaultMessage:"Fetching channels"},cardChannelsContent:{id:"Welcome.cardChannelsContent",defaultMessage:"Demo example to fetch some data using GraphQL and displaying it in a paginated table."}}),V="welcome-mod__imageContainer___CPmZu",I="welcome-mod__infoCard___RCecG",W="welcome-mod__infoCardLink___GokdK";var P=t("./src/components/welcome/web-developer.svg"),B=t.n(P),$=function WrapWith(e){return e.condition?e.wrapper(e.children):e.children};$.displayName="WrapWith",$.propTypes={condition:A().bool.isRequired,wrapper:A().func.isRequired,children:A().node.isRequired};var U=function InfoCard(e){return(0,_.tZ)(L.Z.Item,{children:(0,_.tZ)("div",{className:I,children:(0,_.BX)(l.Z.Stack,{scale:"m",children:[(0,_.tZ)(S.Z.Headline,{as:"h3",children:(0,_.tZ)($,{condition:!0,wrapper:function wrapper(n){return e.isExternal?(0,_.tZ)("a",{className:W,href:e.linkTo,target:"_blank",rel:"noopener noreferrer",children:n}):(0,_.tZ)(m.rU,{className:W,to:e.linkTo,children:n})},children:(0,_.BX)(l.Z.Inline,{scale:"s",alignItems:"center",children:[(0,_.tZ)("span",{children:e.title}),(0,_.tZ)(p.oR,{size:"big",color:"primary"})]})})}),(0,_.tZ)(S.Z.Body,{children:e.content})]})})})};U.displayName="InfoCard";var q=function Welcome(){var e=(0,a.$B)(),n=(0,d.Z)();return(0,_.tZ)(v.Z.Horizontal,{max:16,children:(0,_.BX)(l.Z.Stack,{scale:"xl",children:[(0,_.tZ)(S.Z.Headline,{as:"h1",intlMessage:O.title}),(0,_.tZ)("div",{children:(0,_.tZ)("div",{className:V,children:(0,_.tZ)("img",{alt:"web developer",src:B(),width:"100%",height:"100%"})})}),(0,_.BX)(l.Z.Stack,{scale:"l",children:[(0,_.tZ)(S.Z.Subheadline,{as:"h4",intlMessage:O.subtitle}),(0,_.BX)(L.Z,{gridGap:"16px",gridAutoColumns:"1fr",gridTemplateColumns:"repeat(3, 1fr)",children:[(0,_.tZ)(U,{title:n.formatMessage(O.cardDocumentationTitle),content:n.formatMessage(O.cardDocumentationContent),linkTo:"https://docs.commercetools.com/custom-applications/what-is-a-custom-application",isExternal:!0}),(0,_.tZ)(U,{title:n.formatMessage(O.cardDesignSystemTitle),content:n.formatMessage(O.cardDesignSystemContent),linkTo:"https://uikit.commercetools.com",isExternal:!0}),(0,_.tZ)(U,{title:n.formatMessage(O.cardChannelsTitle),content:n.formatMessage(O.cardChannelsContent),linkTo:"".concat(e.url,"/channels")})]})]})]})})};q.displayName="Welcome";const Q=q;var G=t("./src/constants.js"),X=function ApplicationRoutes(){var e=(0,a.$B)(),n=(0,i.bk)({demandedPermissions:[G._.View]});return(0,_.tZ)(l.Z.Inset,{scale:"l",children:(0,_.BX)(a.rs,{children:[(0,_.tZ)(a.AW,{path:"".concat(e.path,"/channels"),children:n?(0,_.tZ)(E,{linkToWelcome:e.url}):(0,_.tZ)(o.BU,{})}),(0,_.tZ)(a.AW,{children:(0,_.tZ)(Q,{})})]})})};X.displayName="ApplicationRoutes";const H=X}}]);
//# sourceMappingURL=7770.routes.d46215a6e499a24bec7c.js.map