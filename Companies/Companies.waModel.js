
guidedModel =// @startlock
{
	City :
	{
		methods :
		{// @endlock
			getCities:function()
			{// @lock
				// Return array of city names.
				return ds.City.all().orderBy("name").toArray("name, ID");
			}// @startlock
		}
	}
};// @endlock
