import { Request, Response } from "express";
import { pet } from '../models/pet';
import { send } from "process";
import {createMenuObject} from '../helpers/createMenuObject';

export const home =(req: Request, res: Response) => {
       let list = pet.getAll();
      
         res.render('pages/page', {
         menu: createMenuObject('all'),
         banner: {
            title:  'Todos os animais',
            backgrond: 'allanimals.jpg'
         },
         list
      
      });

}
export const dogs =(req: Request, res: Response) => {
    let list = pet.getFromType('dog');

   res.render('pages/page', {
      menu: createMenuObject('dog'),
      banner: {
         title:  'Cachorros',
         backgrond: 'banner_dog.jpg'
      },

      list
   
});

}

export const cats =(req: Request, res: Response) => {
    let list = pet.getFromType('cat')

   res.render('pages/page', {
      menu: createMenuObject('cat'),
      banner: {
         title:  'Gatos',
         backgrond: 'banner_cat.jpg'

      },

      list
   
   });

}
export const fishes =(req: Request, res: Response) => {
     let list = pet.getFromType('fish');

   res.render('pages/page', {
      menu: createMenuObject('fish'),
      banner: {
         title:  'Peixes',
         backgrond: 'banner_fish.jpg'

      },
      
      list
   
   });

}