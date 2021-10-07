

exports.getAllData = (req, res, next) => {
    const data = [
        {
            magnitude: 4.1,
            datetime: '2021-10-07T11:17:08.6Z',
            latitude: '28.68',
            longitude: -'17.64',
            region: 'CANARY ISLANDS, SPAIN REGION',
            
            depth: '30',
            author: 'EMS'
        },
        {
            magnitude: 3.3,
            datetime: '2021-10-07T11:05:08.2Z',
            latitude: '28.56',
            longitude: -'17.83',
            region: 'CANARY ISLANDS, SPAIN REGION',
            depth: '14',
            author: 'MDD'
        },
        {
            magnitude: 4.2,
            datetime: '2021-10-07T11:03:27.0Z',
            latitude: '2.51',
            longitude: '128.16',
            region: 'HALMAHERA, INDONESIA',
            depth: '125',
            author: 'DJA'
        },
        {
            magnitude: 3.1,
            datetime: '2021-10-07T10:50:21.0Z',
            latitude: '-0.17',
            longitude: '122.89',
            region: 'SULAWESI, INDONESIA',
            depth: '74',
            author: 'DJA'
        },
        {
            magnitude: 3.4,
            datetime: '2021-10-07T10:41:04.8Z',
            latitude: '28.56',
            longitude: -'17.84',
            region: 'CANARY ISLANDS, SPAIN REGION',
            depth: '12',
            author: 'MDD'
        },
        {
            magnitude: 4.4,
            datetime: '2021-10-07T10:38:05.0Z',
            latitude: '-6.78',
            longitude: '132.29',
            region: 'KEP. TANIMBAR REGION, INDONESIA',
            depth: '88',
            author: 'DJA'
        },
        {
            magnitude: 2.8,
            datetime: '2021-10-07T10:31:25.0Z',
            latitude: '-28.66',
            longitude: -'70.79',
            region: 'ATACAMA, CHILE',
            depth: '15',
            author: 'GUC'
        },
        {
            magnitude: 2.9,
            datetime: '2021-10-07T10:20:09.7Z',
            latitude: '31.67',
            longitude: -'104.4',
            region: 'WESTERN TEXAS',
            depth: '4',
            author: 'NEI'
        },
        {
            magnitude: 2.1,
            datetime: '2021-10-07T10:17:15.3Z',
            latitude: '48.82',
            longitude: -'0.09',
            region: 'FRANCE	',
            depth: '2',
            author: 'STR'
        },
        {
            magnitude: 2.1,
            datetime: '2021-10-07T10:11:49.0Z',
            latitude: '45.56',
            longitude: '15.95',
            region: 'CROATIA',
            depth: '2',
            author: 'LJU'
        }
    ];
    res.send({
        request: '/data',
        Ndata: data.length,
        data: data
            
        

    });
}

