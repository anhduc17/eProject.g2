$(document).ready(function () {
    var data = [];
    $.getJSON("js/data.json", function (items) {
        // console.log(items);
        data = items;

        displayImages(data);

    });

    $(document).on('click', ".divImage", function () {
        let id = $(this).data('id')
        let product = data.filter(ele => ele.id == id)

        setModal(product[0])
        $('#myModal').modal('show');
    })

});

function displayImages(items) {
    let s = ``;

    $.each(items, function (k, v) {

        s += `<div class="col-sm-6 col-md-4 divImage" data-id="${v.id}">
                    <img src="image/shop/${v.pic}" alt="" class="productImage">
                    <p>
                        Name: ${v.name} <br>
                        Price: ${v.price}
                    </p> 
                </div> `;

    });

    $("#products").html(s);

}

function setModal(product) {
    let x = `
        <div class="row">
            <div class="col-md-6">
                <div class="imgs-zoom-area"><img id="zoom_03" src="image/shop/${product.pic}"   style="width: 100%;" alt=""></div>
            </div>
            <div class="col-md-6">
                <h3 class="text-black-1">${product.name}</h3>

                <h6 class="brand-name-2">${product.price}</h6>
                <h6 class="brand-name-3">${product.brand.toUpperCase()}</h6>
                <div role="tabpanel" class="tab-pane active" id="description">
                    <p>${product.description}</p>
                </div>
            </div>
        </div>           
        `;

    $('.modal-body').html(x)
}