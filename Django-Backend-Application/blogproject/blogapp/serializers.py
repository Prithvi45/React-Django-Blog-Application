from rest_framework import serializers
from . import models

class HelloSerializers(serializers.Serializer):
    """ Serializers a name field for testing our APIView """

    name = serializers.CharField(max_length=10)


class UserProfileSerializer(serializers.ModelSerializer):
    """ Serializer for our UserProfile objects """

    class Meta:
        model = models.UserProfile
        fields = ('id','email','name','password')
        extra_kwargs = {'password':{'write_only':True}}

    def create(self, validated_data):
        """Used to create a new user."""

        user = models.UserProfile(
            email=validated_data['email'],
            name=validated_data['name']
        )

        user.set_password(validated_data['password'])
        user.save()
        return user


class UserPostFeedSerializer(serializers.ModelSerializer):
    """ A serializer for User Post Update """

    class Meta:
        model = models.Post
        fields = ('id','user_profile','title','created_on','content')
        extra_kwargs = {'user_profile':{'read_only':True}}
