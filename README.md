# lightweight-showcase
small lightweight carousel showcase made w/ vanilla JS and css

#Getting Started
1.Ensure that you download the demo folder.
2. In your html document, match your slider html code to the layout within the demo file.
3. link the "showcase.js" file in your html.
4. link the "showcase.css" file to your document's <head> section.

#Usage
1. The classnames and html structure of the showcase in the dmeo file should not be changed, the core js relies on these classes to function.
2. the attribute 'data-detail-number=""' controls this showcase. Be sure you are creating new showcase elements and incrementally updating their 'data-detail-number=""' attribute.
    a. You will see that the showcase arrows and the showcase controls use the 'data-detail-number=""' attribute to point to the showcase element they should show.
3. When adding more showcase elements, be sure to do the following: 
    a. update the "data-detail-number=" values to the previous number for the "arrow-left" arrow, and the next number on the "arrow-right" arrow.
      ex. If you have 3 elements, and are adding a fourth, "arrow-left" should have the attribute 'data-detail-number="3"', and the "arrow-right" should have 'data-detail-number="1"' (the last element of the showcase should move forward to the first element).
    b. add a new <li> element to "detail-choice-container" and add the 'data-detail-number=""' attribute with the corresponsing number to the target element this should point to.


#Customization
1. Feel free to customize the slider as you like. You can create multiple div/image/text elements within the "detail-view" element.
2. The showcase.css is a starting point for your showcase - feel free to change and alter any aspect as it fits your unique design.
  
#Reach Out
Feel free to make a PR, or email at mattvitellodesign@gmail.com
