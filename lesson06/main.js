// document.querySelector('.btn-whatsapp').onclick = () => {
//     let a = true
//     if (document.querySelector('.whatsapp.active')) {
//         a = false
//     }
//     if(document.querySelector('.block.active')) {
//         document.querySelector('.block.active').classList.toggle('active')
//     }
//     if (a)
//         document.querySelector('.whatsapp').classList.toggle('active')
// }

// document.querySelector('.btn-facebook').onclick = () => {
//     let a = true
//     if (document.querySelector('.facebook.active')) {
//         a = false
//     }
//     if(document.querySelector('.block.active')) {
//         document.querySelector('.block.active').classList.toggle('active')
//     }
//     if (a)
//         document.querySelector('.facebook').classList.toggle('active')
// }

// document.querySelector('.btn-instagram').onclick = () => {
//     let a = true
//     if (document.querySelector('.instagram.active')) {
//         a = false
//     }
//     if(document.querySelector('.block.active')) {
//         document.querySelector('.block.active').classList.toggle('active')
//     }
//     if (a)
//         document.querySelector('.instagram').classList.toggle('active')
// }

let a = ''

document.querySelector('.btn-whatsapp').onclick = () => {
        if(document.querySelector('.block.active')) {
            document.querySelector('.block.active').classList.toggle('active')
        }
        if (a != 'whatsapp') {
            document.querySelector('.whatsapp').classList.toggle('active')
            a = 'whatsapp'
        }else a = ''
        console.log(a)
    }
    
    document.querySelector('.btn-facebook').onclick = () => {
        if(document.querySelector('.block.active')) {
            document.querySelector('.block.active').classList.toggle('active')
        }
        if (a != 'facebook') {
            document.querySelector('.facebook').classList.toggle('active')
            a= 'facebook'
        } else a = ''
        console.log(a)


    }
    
    document.querySelector('.btn-instagram').onclick = () => {
        if(document.querySelector('.block.active')) {
            document.querySelector('.block.active').classList.toggle('active')
        }
        if (a != 'instagram') {
            document.querySelector('.instagram').classList.toggle('active')
            a= 'instagram'
        } else a = ''
        console.log(a)

    }

    document.querySelector('.btn-twiter').onclick = () => {
        if (document.querySelector('.twiter.active')) {
            document.querySelector('.twiter').classList.remove('active')
        }else document.querySelector('.twiter').classList.add('active')
    }