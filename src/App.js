import React, { Component } from 'react';
import './App.css';
import Form from './components/Form'
import Grid from './components/Grid'
import Lightbox from 'react-image-lightbox'

class App extends Component {
  constructor() {
    super()

    this.state = {
      wallpaperIndex: 0,
      isOpen: false,
      wallpapers: ['https://design-milk.com/images/2017/12/DM-Wallpaper-1801-2560x1440.jpg',
        'http://hdwpro.com/wp-content/uploads/2016/01/Top-Desktop-Wallpaper.jpg',
        'http://www.modafinilsale.com/data/out/741/233309373-imgur-desktop-wallpaper-dump.png'
      ]
    }
  }

  addWallpaper(url) {
    this.setState({
      wallpapers: [...this.state.wallpapers, url]
    })
  }

  deleteWallpaper(index) {
    this.setState({
      wallpapers: [...this.state.wallpapers.slice(0, index), ...this.state.wallpapers.slice(index + 1)]
    })
  }

  openLightbox(index) {
    this.setState({
      isOpen: true,
      wallpaperIndex: index
    })
  }


  render() {
    const { wallpapers, wallpaperIndex, isOpen } = this.state;

    return (
      <div className="App">
        <Form
          addUrl={(url) => this.addWallpaper(url)}
        />
        <Grid
          items={wallpapers}
          deleteUrl={(index) => this.deleteWallpaper(index)}
          openLightbox={(index) => this.openLightbox(index)}
        />
        {isOpen && (
          <Lightbox
            mainSrc={wallpapers[wallpaperIndex]}
            nextSrc={wallpapers[(wallpaperIndex + 1) % wallpapers.length]}
            prevSrc={wallpapers[(wallpaperIndex + wallpapers.length - 1) % wallpapers.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                wallpaperIndex: (wallpaperIndex + wallpapers.length - 1) % wallpapers.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                wallpaperIndex: (wallpaperIndex + 1) % wallpapers.length,
              })
            }
          />
        )}
      </div>
    );
  }
}

export default App;
