import React, { Component } from 'react'
import logo from '../Images/logo.svg'
import './Styles/HomePage.css'

export default class DetailPage extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          {this.renderText()}
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }

  renderText () {
    return (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac sodales nibh. Mauris sodales gravida arcu a tempor. Phasellus posuere dui a velit dignissim, scelerisque consectetur elit cursus. Mauris euismod placerat ligula, a posuere ex rhoncus sed. Nam tempor nulla risus, eu accumsan turpis placerat id. Mauris non suscipit ex. In sagittis efficitur magna, eget maximus arcu dapibus vel. Aenean non orci orci.

        Praesent at dignissim ligula, nec porttitor ex. In sollicitudin lobortis nisl at tristique. Vestibulum hendrerit interdum rhoncus. Nullam nec mi non libero finibus congue. Donec mi urna, luctus in sollicitudin ut, accumsan id leo. Phasellus rutrum nulla tellus, ut imperdiet felis tempor id. Curabitur volutpat mauris lacinia mi facilisis, sit amet pulvinar leo varius. Integer tincidunt, risus ut auctor scelerisque, purus orci porta dui, a porttitor dolor nibh id felis.

        Aenean sit amet posuere tortor. Donec vitae convallis sapien, luctus condimentum ligula. Nulla eleifend, nulla sit amet imperdiet dictum, magna nisl viverra leo, at varius nibh urna vel nisl. Phasellus pharetra leo odio, ut dictum eros fringilla vitae. Mauris scelerisque aliquam faucibus. Donec sed sapien at erat fringilla consectetur at in eros. Proin viverra nec nulla non congue. Nulla ac iaculis elit. Nam vitae blandit leo, blandit dictum erat. In suscipit gravida lectus, nec aliquet sapien feugiat id. Vivamus quis erat dui. Sed ipsum ipsum, sollicitudin at efficitur eget, volutpat non ligula. Praesent sed massa urna.

        Praesent in justo at est congue luctus. Maecenas nec sem vitae neque elementum mattis nec at lectus. Mauris ultricies dolor tortor. Proin id est et arcu accumsan tincidunt. Proin justo nisi, tristique sed justo at, pharetra pulvinar orci. Sed finibus est sed est congue, vitae mollis turpis malesuada. Nullam enim nisl, semper vel scelerisque nec, efficitur eu orci.

        Pellentesque semper eu ex ac egestas. Quisque gravida turpis vel ipsum euismod consequat. Aliquam fringilla placerat neque sit amet blandit. Vestibulum tortor ligula, luctus eu pulvinar eget, malesuada quis magna. Nam sit amet dui pretium, iaculis enim eu, rutrum libero. Maecenas et malesuada lorem, at vestibulum enim. Phasellus et urna urna. Aliquam eget mollis ante, in laoreet metus.
      </p>
    )
  }
}
