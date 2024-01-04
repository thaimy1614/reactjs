import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Yeu nhau xong roi',
            thumbnailUrl: 'https://avatar-ex-swe.nixcdn.com/song/2023/12/01/b/f/c/b/1701411363917.jpg'
        },
        {
            id: 2,
            name: 'Gia cung nhau la duoc',
            thumbnailUrl: 'https://avatar-ex-swe.nixcdn.com/song/2023/09/28/7/7/9/b/1695892525182.jpg'

        },
        {
            id: 3,
            name: 'Em on khong',
            thumbnailUrl: 'https://avatar-ex-swe.nixcdn.com/song/2023/12/07/7/b/5/d/1701954317009.jpg'
        }
    ]
    return (
        <div>
            <h1> Album List 2023</h1>
            <AlbumList albumList={albumList}></AlbumList>
        </div>
    );
}

export default AlbumFeature;