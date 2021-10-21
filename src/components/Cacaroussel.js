import React from 'react'
import Carousel, { Modal, ModalGateway } from 'react-images'

const images = [{ source: 'https://media.lactualite.com/2019/12/361ba8f8-istock-1084346110-1200x675.jpg' }, { source: 'https://img-4.linternaute.com/VS2PPxc_2NAs6vS3wHzExWEaekE=/620x/smart/e79d004b073749b18e276014db89a8bc/ccmcms-linternaute/17119644.jpg' }]

class Cacaroussel extends React.Component {
  state = { modalIsOpen: true }
  toggleModal = () => {
    this.setState(state => ({ modalIsOpen: !state.modalIsOpen }))
  }
  render() {
    const { modalIsOpen } = this.state

    return (
      <ModalGateway>
          <h1> ok ok </h1>
        {modalIsOpen ? (
          <Modal onClose={this.toggleModal}>
            <Carousel views={images} />
          </Modal>
        ) : null}
      </ModalGateway>
    )
  }
}

export default Cacaroussel;