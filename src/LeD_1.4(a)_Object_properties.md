## Object Properties

- The object `common` properties dialog is part of the `scene object properties` dialog, which is located at `Menu bar --> Tools --> Scene object properties`.
- A double-click on an **object name** allows to **rename / editing** it.
- A double-click on an **object icon** opens/closes a `object property dialog` related to the clicked icon.
- The dialog displays the settings and parameters of the last selected object. If no object is selected, the dialog is **inactive**.
- In the scene **object properties dialog**, click the `shape` button to **view/modify geometry**, **adjust color**, **adjust texture** etc. of selected shape. refer *Figure 1*.

![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.4-Object%20Properties%20and%20Scene%20hierarchy/LeD%201.4(a)-Object_properties/Tutorials/LeD_1.4(a)_%20Figure_1.gif)

​                                                                               *Figure 1: Object common properties dialog*

- `Body is dynamic` check box refers that a body / shape have some **mass and inertia** or vice versa. refer Figure 1(a)

![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.4-Object%20Properties%20and%20Scene%20hierarchy/LeD%201.4(a)-Object_properties/Tutorials/LeD_1.4(a)_%20Figure_1(a).gif)

​                                                                                          *Figure 1(a): Body is dynamics*

- In the scene **object properties dialog**, click the `Common` button to display the object common properties dialog.
  - Visibility of object can be changed by unchecking **camera visibility layers**. 
  - Object special properties can be **enabled or disabled** accordingly as mentioned below:
- **Collidable**: It allows enabling / disabling collision detection capability for the selected collidable object.
- **Measurable**: It allows enabling / disabling minimum distance calculation capability for the selected measurable object.
- **Detectable**: It allows enabling / disabling proximity sensor detection capability for the selected detectable object. Clicking **details** allows you to edit the detectable details.
- **Renderable**: It allows enabling / disabling the vision sensor detection capability for the selected renderable object, if unchecked then object can not be seen by vision sensors.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### Respondable masking

A body/object is said to be respondable if they shows any **response** towards any other body /object.

Inside `show dynamics property dialog` you will see **Body is respondable** check box. refer *Figure 2(a)*

![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.4-Object%20Properties%20and%20Scene%20hierarchy/LeD%201.4(a)-Object_properties/Tutorials/LeD_1.4(a)_Figure_2a.gif)

​                                                       							*Figure 2(a): Body is respondable*

> As we noticed that `shape_1` **doesn't** responded to the floor and passed through the floor and fall down.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

1. **Global  respondable mask**
   - It used when both bodies/objects **are** separate i.e. **doesn't** have parent-child relationship.
   - To prevent collision between two bodies / objects , **alternate columns** should be **checked** for both bodies  in `global respondabe mask` .refer *Figure 2(b)*

![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.4-Object%20Properties%20and%20Scene%20hierarchy/LeD%201.4(a)-Object_properties/Tutorials/LeD_1.4(a)_Figure_2b.gif)

​																					*Figure: 2(b) global respondable mask*

> Here we noticed that after simulation start, when we bring `shape_2` towards `shape_1` ,there is no collision as `shape_2` passed through `shape_1` .

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

1. **local respondable mask**

   - It used when both bodies/objects **aren't** separate i.e. **does** have parent-child relationship .
   - To prevent collision between two bodies / objects , **alternate four columns** should be **checked** for both bodies  in `local respondabe mask`. refer *Figure 2(c)*.

   

   ![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.4-Object%20Properties%20and%20Scene%20hierarchy/LeD%201.4(a)-Object_properties/Tutorials/LeD_1.4(a)_Figure_2c.gif)

   ​																					*Figure 2(c): local respondable mask*

   > Here we noticed that after simulation start, when we bring `shape_2 `(**child**) towards `shape_1 `(**parent**) ,there is no collision as `shape_2` passed through `shape_1` .

   -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

   **References**

   1. [CoppeliaSim User Manual](https://www.coppeliarobotics.com/helpFiles/index.html)





