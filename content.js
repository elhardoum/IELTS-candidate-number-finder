(() =>
{
    let cd_num_field = document.getElementById('ctl00_ContentPlaceHolder1_txtCandidateNumber')
      , cb, cb_label

    if ( ! cd_num_field )
        return

    cb = document.createElement('input')
    cb.type = 'checkbox'
    cb.addEventListener('change', e =>
    {
        if ( cb.checked ) {
            localStorage.setItem( 'findCddNum', +new Date )
        } else {
            localStorage.removeItem( 'findCddNum' )
        }
    })

    cb_label = document.createElement('label')
    cb_label.style.display = 'block'
    cb_label.style.fontStyle = 'italic'
    cb_label.appendChild( cb )
    cb_label.appendChild( document.createTextNode('Find my Candidate Number') )

    cd_num_field.parentElement.insertBefore( cb_label, cd_num_field.nextElementSibling )

    if ( localStorage.getItem('findCddNum') && +new Date - parseInt(localStorage.getItem('findCddNum')) <= 60000 ) {
        cb.click()

        if ( document.getElementById('ctl00_ContentPlaceHolder1_tabCandidateResult') ) {
            location.hash = 'ctl00_ContentPlaceHolder1_tabCandidateResult'
            return alert( 'Congrats, your results are here!' )
        }

        cd_num_field.value = parseInt( cd_num_field.value ) +1
        document.getElementById('ctl00_ContentPlaceHolder1_imgbSearch').click()
    }
})()