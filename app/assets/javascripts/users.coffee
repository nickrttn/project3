# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

# Bron: http://ole.michelsen.dk/blog/navigate-form-fields-with-arrow-keys.html
(($) ->
  $.fn.formNavigation = ->
    $(this).each ->
      $(this).find('input').on 'keyup', (e) ->
        switch e.which
          when 39
            $(this).closest('td').next().find('input').focus()
          when 37
            $(this).closest('td').prev().find('input').focus()
        return
      return
    return
  return
) jQuery

$(document).ready ->
  $('.name-selection').formNavigation()
  return
