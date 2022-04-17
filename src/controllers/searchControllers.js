let controller = {
    searchComuna: (req, res) {
        let searchFooterType = [searchByComuna, searchByPrice, searchByName]
        let searchByComuna = req.query.idC;
        let searchByPrice = req.query.maxPrice;
        let searchByNameL = req.query.nameL
        let searchResults = [];
        for
        let (i = 0; i < locales.length; i++) {
            if (users[i].cID.containes(searchFooterType)) {
                forEach.Locales of this.cID {
                    res.render()
                })
        }
    }
}

module.exports = controller