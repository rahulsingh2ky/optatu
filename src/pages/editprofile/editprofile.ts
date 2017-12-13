import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, LoadingController, AlertController,Events,ActionSheetController} from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
 import 'rxjs/add/operator/map'
  import 'rxjs/Rx';
  import { Http, Headers, RequestOptions } from '@angular/http';
  import { GetstartPage } from '../getstart/getstart';
import { HomePage } from '../home/home';
  
/**
 * Generated class for the EditprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-editprofile',
  templateUrl: 'editprofile.html',
})
export class EditprofilePage {
  srcImage: any;
  Events

 public data={};
 public dataa={};
    
  constructor(public events: Events, public navCtrl: NavController, public actionSheetCtrl:ActionSheetController,
   public navParams: NavParams,    public toastCtrl: ToastController,public loadingCtrl: LoadingController,

    public camera: Camera, public http: Http) {this.getuser();
  }
  ionViewDidLoad(){
     
    console.log('ionViewDidLoad EditprofilePage');
    
  }
  
    getuser(){
       console.log(JSON.parse(localStorage.getItem('USER_DATA'))._id); 
      let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    let options = new RequestOptions({ headers: headers });
    var data = {
      id : JSON.parse(localStorage.getItem('USER_DATA'))._id

    }


    var Serialized = this.serializeObj(data);
    var Serialized = this.serializeObj(data);
    var Loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      cssClass: 'loader'
  
  });
    Loading.present().then(()=> 
    this.http.post('http://default-environment.mm4pnmggzz.us-east-2.elasticbeanstalk.com/api/userinfo', Serialized, options).map(res => res.json()).subscribe(response => {
        console.log(response);

        console.log( response.data.user_image);
        this.srcImage=response.data.user_image;
      if (response.status != null){
           Loading.dismiss();
           this.data={
          address : response.data.address,
          gender: response.data.gender,
        firstname : response.data.firstname,
        lastname : response.data.lastname,              
        dob : response.data.dob,
        email : response.data.email,
        //  role : response.data.role,
        phone: response.data.phone,
       };
          console.log(this.data);
          this.srcImage=response.data.user_image;
         
      }
       
    }))
   }
      
 submitinfo(editinfo) {
    console.log(editinfo.value.dob);
    let headers = new Headers();
    
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    var options = new RequestOptions({ headers: headers });

    var userid = JSON.parse(localStorage.getItem('USER_DATA'))._id
    console.log(userid);
        
      this.dataa = {
        first_name: editinfo.value.firstname,
        last_name: editinfo.value.lastname,
        phone: editinfo.value.phone,
        birth_day : editinfo.value.dob,
        gender: editinfo.value.gender,
        address: editinfo.value.address,
        id: JSON.parse(localStorage.getItem('USER_DATA'))._id,
        email: editinfo.value.email
        
       
      }
      console.log(this.dataa);
      var serialized = this.serializeObj(this.dataa);
      this.http.post('http://default-environment.mm4pnmggzz.us-east-2.elasticbeanstalk.com/api/user_data_update', serialized, options)
        .map(response => response.json())
        .subscribe(response => {
          console.log(response);
          this.events.publish('rahul', response);
          this.navCtrl.push(HomePage)
         
        })
        
    }
serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
    return result.join("&");
  }
editprofile() {
    this.navCtrl.push(EditprofilePage);
  }
  CameraAction() {
 
    let actionsheet = this.actionSheetCtrl.create({
      title: "Choose Album",
      buttons: [{
        text: 'Camera',
        handler: () => {
          const options: CameraOptions = {
            quality: 8,
            sourceType: 1,
            correctOrientation: true,
            allowEdit:true,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
          }
          this.camera.getPicture(options).then((imageUri) => {
            this.srcImage = 'data:image/jpeg;base64,' + imageUri;
            //this.imgTosend = imageUri;
            // this.loading.dismiss();
            alert('camera');
                let headers = new Headers();
            headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
            let options = new RequestOptions({ headers: headers });
                        var postdata = {
              user_id: JSON.parse(localStorage.getItem('USER_DATA'))._id,
              profile_picture: imageUri
            };
            alert(JSON.stringify(postdata));
            console.log(postdata);
            
            var serialized = this.serializeObj(postdata);
                 var Loading = this.loadingCtrl.create({
       spinner: 'bubbles',
       cssClass: 'loader'
     });
     Loading.present().then(() => {
this.http.post('http://default-environment.mm4pnmggzz.us-east-2.elasticbeanstalk.com/api/user_profile_pic', postdata).map(res => res.json()).subscribe(data => {
               Loading.dismiss();

 alert(JSON.stringify(data));
              console.log(data)
              alert("saving image");

            },(err)=>{
              alert(JSON.stringify(err))
            })
     })
    
          }, (err) => {
            alert(JSON.stringify(err));
            // this.loading.dismiss();
            console.log(err);
          });
        }
      },
      {
        text: 'Gallery',
        handler: () => {
          console.log("Gallery Clicked");
          	alert("get Picture")
          // this.loading.present();

          const options: CameraOptions = {
            quality: 10,
            sourceType: 0,
            correctOrientation: true,
            allowEdit:true,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
          }
          this.camera.getPicture(options).then((imageData) => {
            this.srcImage = 'data:image/jpeg;base64,' + imageData; 
                let headers = new Headers();
            headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
            let options = new RequestOptions({ headers: headers });
            var userid = JSON.parse(localStorage.getItem('UserInfo'))._id;          
             var postdata = {
              user_id: userid,
              profile_picture: imageData
            };
            alert(postdata)
            var serialized = this.serializeObj(postdata);
     var Loading = this.loadingCtrl.create({
       spinner: 'bubbles',
       cssClass: 'loader'
     });
     Loading.present().then(() => {
            this.http.post('http://default-environment.mm4pnmggzz.us-east-2.elasticbeanstalk.com/api/user_profile_pic', postdata).map(res => res.json()).subscribe(data => {
              Loading.dismiss();
              console.log(data);
              alert(JSON.stringify(data));
              alert("saving image");

            },(err)=>{
              console.log(JSON.stringify(err))
              alert(JSON.stringify(err))
            })
     })
            alert('gallery working');
          }, (err) => {
            // this.loading.dismiss();
            alert(JSON.stringify(err));
            // Handle error
          });
        }
      },
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
          actionsheet.dismiss();

        }
      }]
    });

    actionsheet.present();
  }
  
  
  
  
  
  
  
}
