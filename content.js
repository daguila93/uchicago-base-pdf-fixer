if (document.baseURI.includes('uchicago.proxy.uff.br/doi/epdf/')) {
    const regex = /epdf/gm;

    // Alternative syntax using RegExp constructor
    // const regex = new RegExp('epdf', 'gm')
    
    const str = document.baseURI;
    const subst = `pdf`;
    
    // The substituted value will be contained in the result variable
    const result = str.replace(regex, subst);
    
    location.href = result;
}
