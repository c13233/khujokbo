!function(e){e.filters={append:function(t){t=t||{};var n=t.label,i=t.name,a=t.type,l=t.value,o=t.operator,p=t.select_options,s=t.index,d="f["+i+"]["+s+"][v]",r="f["+i+"]["+s+"][o]",c=null,u=null;switch(a){case"boolean":c=e('<select class="input-sm form-control"></select>').prop("name",d).append('<option value="_discard">...</option>').append(e('<option value="true"></option>').prop("selected","true"==l).text(RailsAdmin.I18n.t("true"))).append(e('<option value="false"></option>').prop("selected","false"==l).text(RailsAdmin.I18n.t("false"))).append('<option disabled="disabled">---------</option>').append(e('<option value="_present"></option>').prop("selected","_present"==l).text(RailsAdmin.I18n.t("is_present"))).append(e('<option value="_blank"></option>').prop("selected","_blank"==l).text(RailsAdmin.I18n.t("is_blank")));break;case"date":u=e('<input size="20" class="date additional-fieldset default input-sm form-control" type="text" />').css("display",o&&"default"!=o?"none":"inline-block").prop("name",d+"[]").prop("value",l[0]||"").add(e('<input size="20" placeholder="-\u221e" class="date additional-fieldset between input-sm form-control" type="text" />').css("display","between"==o?"inline-block":"none").prop("name",d+"[]").prop("value",l[1]||"")).add(e('<input size="20" placeholder="\u221e" class="date additional-fieldset between input-sm form-control" type="text" />').css("display","between"==o?"inline-block":"none").prop("name",d+"[]").prop("value",l[2]||""));case"datetime":case"timestamp":c=c||e('<select class="switch-additionnal-fieldsets input-sm form-control"></select>').prop("name",r).append(e('<option data-additional-fieldset="default" value="default"></option>').prop("selected","default"==o).text(RailsAdmin.I18n.t("date"))).append(e('<option data-additional-fieldset="between" value="between"></option>').prop("selected","between"==o).text(RailsAdmin.I18n.t("between_and_"))).append(e('<option value="today"></option>').prop("selected","today"==o).text(RailsAdmin.I18n.t("today"))).append(e('<option value="yesterday"></option>').prop("selected","yesterday"==o).text(RailsAdmin.I18n.t("yesterday"))).append(e('<option value="this_week"></option>').prop("selected","this_week"==o).text(RailsAdmin.I18n.t("this_week"))).append(e('<option value="last_week"></option>').prop("selected","last_week"==o).text(RailsAdmin.I18n.t("last_week"))).append('<option disabled="disabled">---------</option>').append(e('<option value="_not_null"></option>').prop("selected","_not_null"==o).text(RailsAdmin.I18n.t("is_present"))).append(e('<option value="_null"></option>').prop("selected","_null"==o).text(RailsAdmin.I18n.t("is_blank"))),u=u||e('<input size="25" class="datetime additional-fieldset default input-sm form-control" type="text" />').css("display",o&&"default"!=o?"none":"inline-block").prop("name",d+"[]").prop("value",l[0]||"").add(e('<input size="25" placeholder="-\u221e" class="datetime additional-fieldset between input-sm form-control" type="text" />').css("display","between"==o?"inline-block":"none").prop("name",d+"[]").prop("value",l[1]||"")).add(e('<input size="25" placeholder="\u221e" class="datetime additional-fieldset between input-sm form-control" type="text" />').css("display","between"==o?"inline-block":"none").prop("name",d+"[]").prop("value",l[2]||""));break;case"enum":var m=l instanceof Array;c=e('<select class="select-single input-sm form-control"></select>').css("display",m?"none":"inline-block").prop("name",m?undefined:d).data("name",d).append('<option value="_discard">...</option>').append(e('<option value="_present"></option>').prop("selected","_present"==l).text(RailsAdmin.I18n.t("is_present"))).append(e('<option value="_blank"></option>').prop("selected","_blank"==l).text(RailsAdmin.I18n.t("is_blank"))).append('<option disabled="disabled">---------</option>').append(p).add(e('<select multiple="multiple" class="select-multiple input-sm form-control"></select>').css("display",m?"inline-block":"none").prop("name",m?d+"[]":undefined).data("name",d+"[]").append(p)).add(e('<a href="#" class="switch-select"></a>').append(e("<i></i>").addClass("icon-"+(m?"minus":"plus"))));break;case"string":case"text":case"belongs_to_association":c=e('<select class="switch-additionnal-fieldsets input-sm form-control"></select>').prop("value",o).prop("name",r).append('<option value="_discard">...</option>').append(e('<option data-additional-fieldset="additional-fieldset" value="like"></option>').prop("selected","like"==o).text(RailsAdmin.I18n.t("contains"))).append(e('<option data-additional-fieldset="additional-fieldset" value="is"></option>').prop("selected","is"==o).text(RailsAdmin.I18n.t("is_exactly"))).append(e('<option data-additional-fieldset="additional-fieldset" value="starts_with"></option>').prop("selected","starts_with"==o).text(RailsAdmin.I18n.t("starts_with"))).append(e('<option data-additional-fieldset="additional-fieldset" value="ends_with"></option>').prop("selected","ends_with"==o).text(RailsAdmin.I18n.t("ends_with"))).append('<option disabled="disabled">---------</option>').append(e('<option value="_present"></option>').prop("selected","_present"==o).text(RailsAdmin.I18n.t("is_present"))).append(e('<option value="_blank"></option>').prop("selected","_blank"==o).text(RailsAdmin.I18n.t("is_blank"))),u=e('<input class="additional-fieldset input-sm form-control" type="text" />').css("display","_present"==o||"_blank"==o?"none":"inline-block").prop("name",d).prop("value",l);break;case"integer":case"decimal":case"float":c=e('<select class="switch-additionnal-fieldsets input-sm form-control"></select>').prop("name",r).append(e('<option data-additional-fieldset="default" value="default"></option>').prop("selected","default"==o).text(RailsAdmin.I18n.t("number"))).append(e('<option data-additional-fieldset="between" value="between"></option>').prop("selected","between"==o).text(RailsAdmin.I18n.t("between_and_"))).append('<option disabled="disabled">---------</option>').append(e('<option value="_not_null"></option>').prop("selected","_not_null"==o).text(RailsAdmin.I18n.t("is_present"))).append(e('<option value="_null"></option>').prop("selected","_null"==o).text(RailsAdmin.I18n.t("is_blank"))),u=e('<input class="additional-fieldset default input-sm form-control" type="text" />').css("display",o&&"default"!=o?"none":"inline-block").prop("type",a).prop("name",d+"[]").prop("value",l[0]||"").add(e('<input placeholder="-\u221e" class="additional-fieldset between input-sm form-control" />').css("display","between"==o?"inline-block":"none").prop("type",a).prop("name",d+"[]").prop("value",l[1]||"")).add(e('<input placeholder="\u221e" class="additional-fieldset between input-sm form-control" />').css("display","between"==o?"inline-block":"none").prop("type",a).prop("name",d+"[]").prop("value",l[2]||""));break;default:c=e('<input type="text" class="input-sm form-control" />').prop("name",d).prop("value",l)}var f=e("<p>").addClass("filter form-search").append(e('<span class="label label-info form-label"></span>').append(e('<a href="#delete" class="delete"></a>').append('<i class="fa fa-trash-o fa-fw icon-white"></i>').append(document.createTextNode(n)))).append("&nbsp;").append(c).append("&nbsp;").append(u);e("#filters_box").append(f),f.find(".date, .datetime").datetimepicker({locale:RailsAdmin.I18n.locale,showTodayButton:!0,format:t.datetimepicker_format}),e("hr.filters_box:hidden").show("slow")}},e(document).on("click","#filters a",function(t){t.preventDefault(),e.filters.append({label:e(this).data("field-label"),name:e(this).data("field-name"),type:e(this).data("field-type"),value:e(this).data("field-value"),operator:e(this).data("field-operator"),select_options:e(this).data("field-options"),index:e.now().toString().slice(6,11),datetimepicker_format:e(this).data("field-datetimepicker-format")})}),e(document).on("click","#filters_box .delete",function(t){t.preventDefault(),form=e(this).parents("form"),e(this).parents(".filter").remove(),!e("#filters_box").children().length&&e("hr.filters_box:visible").hide("slow")}),e(document).on("click","#filters_box .switch-select",function(t){t.preventDefault();var n=e(this).siblings("select:visible"),i=e(this).siblings("select:hidden");i.attr("name",i.data("name")).show("slow"),n.attr("name",null).hide("slow"),e(this).find("i").toggleClass("icon-plus icon-minus")}),e(document).on("change","#filters_box .switch-additionnal-fieldsets",function(){var t=e(this).find("option:selected");(klass=e(t).data("additional-fieldset"))?(e(this).siblings(".additional-fieldset:not(."+klass+")").hide("slow"),e(this).siblings("."+klass).show("slow")):e(this).siblings(".additional-fieldset").hide("slow")})}(jQuery);