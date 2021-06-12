<!-- <center><img src="http://mooc.e-yantra.org/img/eYantra_logo.svg" alt="e-yantra_logo" style="scale:75%;" /></center> -->

<style>
.back{
	position: fixed;
	width: 250px;
	height: 250px;
	top: 50%;
	left: 50%;
    margin-top: auto; 
    margin-left: auto; 
	opacity: 0.15;
    z-index: -1;
	}
</style>



<!-- <img src="http://mooc.e-yantra.org/img/EyantraLogoMini.png" class="back"> -->

## Object properties -Transcript

- Hello guys ,welcome to the tutorials on coppeliasim, In this session we will learn about **object properties** such as physical appearance , geometry, color and texture etc. 
- Common properties such as **Renderable , collidable and camera visibility** layers will be explained.
- We will learn dynamic properties of object also **global respondable mask and local respondable mask** and how to enable/disable them.

**lets get started**

Object properties can be opened/seen by double clicking on the icon in front of the name of that particular object that can be seen in scene hierarchy,

basically, properties are categorized into three categories i.e. **shape properties, common properties and dynamic properties**. 

1. We will learn all three one by one, so add a cuboid or any other primitive shape you want into scene , the only change will be there is different **shape properties** such as for a cuboid there are edge lengths and for disc it will be radius and so on.

2. After adding a cuboid into the scene **rename** as shape_1 by double clicking on name of object and then **double click** on icon of that object to open **scene object properties** dialog.

3.  Now you will notice three categories shape , common and dynamic properties .refer Figure 1.

   

​                                                     ![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.4-Object%20Properties%20and%20Scene%20hierarchy/LeD%201.4(a)-Object_properties/Transcript/LeD_1.4(a)_Transcript_%20Figure_1.JPG)

   ​                                                                       *Figure 1: Scene object properties dialog*

4. Inside shape category you will see **visual properties** in which you can change/adjust color of object and at bottom you can **adjust texture and modify geometry** refer Figure 2.

   ![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.4-Object%20Properties%20and%20Scene%20hierarchy/LeD%201.4(a)-Object_properties/Transcript/LeD_1.4(a)_Transcript_%20Figure_2.gif)

   ​                                                                                 *Figure 2: Renaming and Geometry modification*

   **Reflection Spot**

   > Did you noticed that I enable body is dynamics? what's that mean?
   >
   > So basically when we want that a body/shape have some mass and inertia similar to that if the body will be in real world not in simulation software. So if you add a cuboid and raise it to a certain height and then run simulation then cuboid will fall down if body is dynamic option is **checked** or will remain in air if body is dynamic is **unchecked** i.e. **body is static**. refer Figure 2(a).
   >
   > 
   >
   > ![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.4-Object%20Properties%20and%20Scene%20hierarchy/LeD%201.4(a)-Object_properties/Transcript/LeD_1.4(a)_Transcript_%20Figure_2(a).gif) 

   ​                                                                               *Figure 2(a): Body is dynamic property*

5. After doing this , we will proceed towards common properties. So when you open common properties you will se some properties whose name is self explanatory and others we will discuss.

6. We will discuss Visibility of object also we will discuss about object special properties i.e. 

   - **Renderable**: It allows enabling / disabling the vision sensor detection capability for the selected renderable object, if unchecked then object can not be seen by vision sensors refer Figure 3.
   - **Collidable**: It allows enabling / disabling collision detection capability for the selected collidable object (will see in upcoming sessions).
   - **Measurable**: It allows enabling / disabling minimum distance calculation capability for the selected measurable object.
   - **Detectable**: It allows enabling / disabling proximity sensor detection capability for the selected detectable object. Clicking **details** allows you to edit the detectable details.(will see in upcoming sessions)
   - **Visibility** of object can be changed by unchecking **camera visibility layers** refer Figure 3. 

   ![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.4-Object%20Properties%20and%20Scene%20hierarchy/LeD%201.4(a)-Object_properties/Transcript/LeD_1.4(a)_Transcript_%20Figure_3.gif)

   ​                                                             Figure 3: Renderable and camera visibility property

7. Now we will move ahead and learn Respondable masking i.e. **global respondable mask and local respondable mask**

8. ADD one more cuboid of any dimension and rename it as **shape_2**.

9. A body/object is said to be respondable if they shows any **response** towards any other body /object when you click `show dynamics property dialog` you will see **Body is respondable** check box. 

10. If you disable or uncheck for **shape_1** and enable or check for **shape_2** , then you will see **shape_1** will fall and will pass through the floor due to gravity as it will not respond to any solid body or floor, it acts like there is nothing. But **shape_2** will remain on the floor. refer Figure 4(a)

    ![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.4-Object%20Properties%20and%20Scene%20hierarchy/LeD%201.4(a)-Object_properties/Transcript/LeD_1.4(a)_Transcript_%20Figure_4a.gif)

    ​								                                Figure 4(a) :Body is respondable check box

    There are Two types of masking as mentioned before **i.e. local and global respondable mask**

    **Global  respondable mask**

    - It used when both bodies/objects (shape_1 and shape_2 in our case) **are** separate i.e. **doesn't** have parent-child relationship.

    - To prevent collision between two bodies / objects , **alternate columns** should be **checked** for both bodies  in `global respondabe mask` .refer *Figure 4(b)*

    - Now we will notice that after simulation start, when we bring `shape_2` towards `shape_1` ,there is no collision as `shape_2` passed through `shape_1` refer Figure 4(b).

      ![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.4-Object%20Properties%20and%20Scene%20hierarchy/LeD%201.4(a)-Object_properties/Transcript/LeD_1.4(a)_Transcript_%20Figure_4b.gif)

      ​                                                              Figure 4(b): global respondable masking

    **Local respondable mask**

    - It used when both bodies/objects(shape_1 and shape_2 in our case) **aren't** separate i.e. **does** have parent-child relationship .
    - To prevent collision between two bodies / objects , **alternate four columns** should be **checked** for both bodies  in `local respondabe mask`. refer *Figure 4(c)*.
    - Now we will notice that after simulation start, when we bring `shape_2`(**child**) towards `shape_1`(**parent**) ,there is no collision as `shape_2` passed through `shape_1` refer Figure 4(c).

    ![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.6-Joints%20and%20Force%20Sensor/Tutorial/LeD_1.4(a)_Transcript_%20Figure_4c.gif)

    ​														             Figure 4(c): local respondable masking

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

