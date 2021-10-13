import { connect } from 'react-redux';

import './App.scss';

import Header from '../Header/Header';
import ImagesList from '../ImagesList/ImagesList';
import Loader from '../Loader/Loader';

const App = (props) => {
  const { images, isLoading } = props;
  return (
    <div className="App">
      <Header />
      <ImagesList images={images} />
      {isLoading && <Loader/>}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    images: state.images,
    isLoading: state.isLoading
  }
}

export default connect(mapStateToProps)(App);