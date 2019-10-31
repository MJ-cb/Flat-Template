
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';

// No imports or requirements Below this line 

let mobileMenu = new MobileMenu();
//let revealOnScroll = new RevealOnScroll();
new RevealOnScroll($(".featured-item"),"85%");
new RevealOnScroll($(".testimonial"),"60%");
let stickyHeader = new StickyHeader();
let modal = new Modal();