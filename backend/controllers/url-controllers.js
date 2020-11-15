const urlCtrl = {};
const Url = require('../models/Link');
const validator = require('validator');
const shortid = require("shortid");

urlCtrl.redirectUrl = async (req, res) => {
    const token = req.params.id;
    console.log('response', token);

    try {
        const URL = await Url.findToken(token);
        // si no existe generated
        if (!URL) {
            console.log('url generado no valido')
        } else {
            console.log('si fue valido');
            console.log('url original', URL.original)
            res.json(URL.original);
        }
    }catch(error) {
        console.log(error);
    }
    

}

urlCtrl.addUrl = async (req, res) => {
    console.log("response", req.body, req.body.original)
    const  url = req.body.original;
    console.log("url", url)
    if (!validator.isURL(url, {
        require_protocol: true})
    ) {
        console.log('url no valida');
    }

    try {
        console.log('url valida')
        let URL = await Url.findUrl(url);

        // si no existe url, crear
        if (!URL) {
            console.log('no encontrada');
            let urlObj = {}
            urlObj.original = url;
            urlObj.token = shortid.generate();
            urlObj.generated = `http://localhost:4000/api/url/${urlObj.token}`;
            urlObj.counter = 1;
            await Url.create(urlObj).then((id) => {
                console.log('Url created with id ', id);
                res.json(urlObj.token);
            })
        }else{
            // si existe url
            console.log("si esta", URL);
            counter = URL.counter + 1;
            await Url.addCounter(URL.id, counter)
                .then(() => {
                    console.log('updated');
                    res.json(URL.token);
                })
            
            
        }
    }catch(error){
        console.log('error occured');
    }

}

urlCtrl.findToken = async(req, res) => {
    const token = req.params.token;
    await Url.findToken(token)
    .then((data) => {
        let url = data;
        res.json(url);
    })
    .catch((err) => {
        console.log(err);
    })
}

urlCtrl.hello = async(req, res) => {
    console.log('hola desde controller');
}

urlCtrl.createUrl = async(req, res) => {
    let url = {}
    console.log("create", req.body, req.body.url );

    url.original = req.body.original;
    url.token = 'token';
    url.generated = 'generated';
    url.counter = 1;

    await Url.create(url).then((id) => {
        console.log('Url created with id: ', id);
        res.json('Url created');
    });
}

urlCtrl.getUrls = async(req, res) => {
    await Url.all()
        .then((data) => {
            let urls = data;
            res.json(urls);
        })
        .catch((err) => {
            console.log(err);
        })
}

module.exports = urlCtrl;