// $(function() {

//   $('.js-check-all').on('click', function() {

//   	if ( $(this).prop('checked') ) {
// 	  	$('th input[type="checkbox"]').each(function() {
// 	  		$(this).prop('checked', true);
// 	  	})
//   	} else {
//   		$('th input[type="checkbox"]').each(function() {
// 	  		$(this).prop('checked', false);
// 	  	})
//   	}
//   });

    

// });



     $(document).ready(function($)
  {
    //--->add row at the end > start
    $(document).on('click',".btn_row_add_below_end", function(e)
    {
      var tableBody = $(document).find('.tbl_code_with_mark').find("tbody");
      var trLast = tableBody.find("tr:last");
      var trNew = trLast.clone();
      trLast.after(trNew);
    });
    //--->add row at the end > end


    //--->current row > new > start
    $(document).on('click',".btn_row_below_new", function(e)
    {
      var r = $(this).closest('tr').clone();

      $.each(r.find('td'), function(i1,v1)
      {
        //clear all data/value in td/cell
        $(this).html('');
      });

      $(this).closest('tr').after(r);
    });
    //--->current row > new > end


    //--->current row > clone > start
    $(document).on('click',".btn_row_below_clone", function(e)
    {
      var r = $(this).closest('tr').clone();
      $(this).closest('tr').after(r);
    });
    //--->current row > clone > end

    //--->current row > delete > start
    $(document).on('click',".btn_row_delete", function(e)
    {
      var r = $(this).closest('tr').remove();
    });
    //--->current row > delete > end
    
  });

 //add new row 
 let btnAdd = document.querySelector('button');
let table = document.querySelector('table');

let nameInput = document.querySelector('#order');
let ageInput = document.querySelector('#Sname');
let countryInput = document.querySelector('#education');
let countryInput2 = document.querySelector('#contact');
let countryInput3 = document.querySelector('#Collage');
let countryInput4 = document.querySelector('#email');
btnAdd.addEventListener('click', () => {
    let order = nameInput.value;
    let Sname = ageInput.value;
    let education = countryInput.value;
    let contact = countryInput2.value;
    let Collage= countryInput3.value;
    let email= countryInput4.value;
    let template = `
                <tr>
                    <td required>${order}</td>
                    <td><a class="more">${Sname}</a></td>
                    <td>${education}<br> <small  class="more">ArtiKeys</small></td>
                    <td>${contact}</td>
                    <td>${Collage}</td>
                    <td>${email}</td>
					
					<td>
          
					<span  class ="btn btn-sm btn-danger btn_row_delete">Delete</span>
				  </td>
                </tr>`;
    table.innerHTML += template;

	
}); 



//time for redirect

setTimeout(function () {
  //Redirect with JavaScript
  window.location.href= 'index.html';
}, 300000);
  
