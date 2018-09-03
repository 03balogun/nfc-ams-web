/*
 *  Document   : be_tables_datatables.js
 *  Author     : pixelcave
 */
var BeTableDatatables=function(){var e=function(){jQuery.extend(jQuery.fn.dataTable.ext.classes,{sWrapper:"dataTables_wrapper dt-bootstrap4"})},a=function(){jQuery(".js-dataTable-full").dataTable({columnDefs:[{orderable:!1,targets:[4]}],pageLength:8,lengthMenu:[[5,8,15,20],[5,8,15,20]],autoWidth:!1})},t=function(){jQuery(".js-dataTable-full-pagination").dataTable({pagingType:"full_numbers",columnDefs:[{orderable:!1,targets:[4]}],pageLength:8,lengthMenu:[[5,8,15,20],[5,8,15,20]],autoWidth:!1})},n=function(){jQuery(".js-dataTable-simple").dataTable({columnDefs:[{orderable:!1,targets:[4]}],pageLength:8,lengthMenu:[[5,8,15,20],[5,8,15,20]],autoWidth:!1,searching:!1,oLanguage:{sLengthMenu:""},dom:"<'row'<'col-sm-12'tr>><'row'<'col-sm-6'i><'col-sm-6'p>>"})};return{init:function(){e(),n(),a(),t()}}}();jQuery(function(){BeTableDatatables.init()});
