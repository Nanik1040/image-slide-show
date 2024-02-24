import React, { useState, useEffect } from 'react';
/**
 * 1. Create a SlideShow component that renders a slideshow of images
 *    along with Next, Prev, and Reset buttons.
 * 2. The component takes an array of slides as props,
 *    where each slide has a `title` and an `image` URL.
 * 3. The slideshow should display one slide at a time,
 *    and the Next, Prev, and Reset buttons should allow the user to navigate through the slides.
 * 4. Update the component to disable the Prev and Reset buttons when the first slide is displayed,
 *    and disable the Next button when the last slide is displayed.
 * 5. Additionally, add data-testid attributes to the Next, Prev, and Reset buttons
 *    as `next-button`, `prev-button` and `reset-button` for testing purposes.
 * 6. Open the `Tests` tab and make sure all the tests pass.
 */
const SlideShow = ({ slides }) => {
  const [currentImage, setCurrentImage] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  // console.log(slides);
  // useEffect(() => {
  //   setCurrentImage(slides[0]);
  // });
  useEffect(() => {
    console.log('useeffect calling whenever index changes');
    setCurrentImage(slides[currentIndex]);
  }, [currentIndex]);
  const prevClick = () => {
    setCurrentIndex(currentIndex - 1);
  };
  const resetClick = () => {
    setCurrentIndex(0);
  };
  const nextClick = () => {
    console.log('nextclick clicked', slides.length);

    setCurrentIndex(currentIndex + 1);
  };
  const imageUrl =
    'https://placehold.co/700x400/orange/white?text=Slide%20Image';
  return (
    <div>
      <h2>Slide Title</h2>

      {currentImage && (
        <img src={currentImage?.image} alt={currentImage?.title} />
      )}

      <br />
      <div
        style={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}
      >
        {currentIndex !== 0 ? (
          <button
            data-testid="prev-button"
            onClick={() => {
              prevClick();
            }}
          >
            Prev
          </button>
        ) : (
          ''
        )}
        <button
          data-testid="reset-button"
          onClick={() => {
            resetClick();
          }}
        >
          Reset
        </button>

        {currentIndex !== slides.length - 1 ? (
          <button
            data-testid="next-button"
            onClick={() => {
              nextClick();
            }}
          >
            Next
          </button>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default SlideShow;

/**
 * Hint:
 * 1. The data-testids are already added.
 *    Make sure to not remove those attributes so the tests can pass.
 * 2. Make sure the first slide is displayed by default when the component loads.
 * 3. Only modify the `SlideShow.js` file.
 *    Any changes to other files are discarded
 */
