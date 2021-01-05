
$(() => {
    
    var charList = [];
    var page = 1;
    function getNames(page){                                                                    // setup a recursive fnct that increments the page in the URL if response > 0
        $.get(`https://www.anapioficeandfire.com/api/characters?page=${page}&pageSize=50`)  
        .done((response) => {
            if (response.length>0){
                charList=[...charList,...response];                                             // append new info to an array
                page++;
                getNames(page);
            }
            else {                                                                               // when no more responses sort the array
                charList.sort((a, b) => {
                    let name1 = a.name.toLowerCase();
                    let name2 = b.name.toLowerCase();
                    if (name1 < name2) {
                        return -1;
                    }
                    if (name1 > name2) {
                        return 1;
                    }
                    return 0;
                });
                charList.forEach((obj) => {                                                      // iterate through array and show on screen using DOM manipulation
                    if (obj.name != ''){
                        let $newLi = $('<li>',{
                            class: "houseClick",
                            id: `${obj.url}`,
                        });
                        let $name = $('<p>', {
                        text: obj.name,
                        id: obj.name,
                        });
                        let $house = $('<p>', {
                            text: ` house allegiances => ${obj.allegiances.length}`,
                            id: obj.name,
                            });
                        $newLi.append($name);
                        $newLi.append($house);
                        $('ul').append($newLi);
                    }
                })
                $('ul').click((e) => {                                                      // add event listener to the UL
                    $.get(e.target.parentElement.id)
                    .done((charObj) => {
                        let $modalBody = $('.modal-body');
                        let $modalTitle = $('#exampleModalLongTitle');
                        $modalTitle.html(`<b>${charObj.name}</b>`);
                        $modalBody.html("");
                        if (charObj.allegiances.length >0){
                            charObj.allegiances.forEach((houseUrl) => {
                                $.get(houseUrl)
                                .done((houseObj) => {
                                $modalBody.html(`${$modalBody.html()}<b style="color:red">${houseObj.name}</b> <br>`)
                            })
                            })
                        }
                        else {
                            $modalBody.html("This character has no allegiances!");
                        }
                    })
                    $('#exampleModalCenter').modal();
                })
            }
                    
        })
    }
    getNames(page); 
})

